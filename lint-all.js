#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class LintRunner {
  constructor() {
    this.projects = [
      {
        name: 'frontend',
        path: 'adminbucket',
        commands: [
          { cmd: 'npm run lint', description: 'TypeScript linting' },
          { cmd: 'npx prettier --check "src/**/*.{ts,html,css,scss}"', description: 'Code formatting check' }
        ]
      },
      {
        name: 'backend',
        path: 'adminbucket/nginx-1.4.1',
        commands: [
          { cmd: 'npm run lint', description: 'C code linting' }
        ]
      }
    ];
    this.errors = [];
    this.warnings = [];
  }

  runCommand(command, cwd, description) {
    try {
      console.log(`\n🔍 Running: ${description}`);
      console.log(`📁 Directory: ${cwd}`);
      console.log(`⚡ Command: ${command}`);
      
      const result = execSync(command, { 
        cwd, 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      console.log(`✅ ${description} - PASSED`);
      return { success: true, output: result };
    } catch (error) {
      console.log(`❌ ${description} - FAILED`);
      console.log(`📄 Output:\n${error.stdout || error.message}`);
      
      this.errors.push({
        project: cwd,
        command,
        description,
        error: error.message,
        output: error.stdout
      });
      
      return { success: false, error: error.message };
    }
  }

  async runAllLinting() {
    console.log('🚀 Starting comprehensive linting...\n');
    
    let totalCommands = 0;
    let passedCommands = 0;

    for (const project of this.projects) {
      console.log(`\n📦 Linting project: ${project.name}`);
      console.log('='.repeat(50));
      
      for (const commandInfo of project.commands) {
        totalCommands++;
        const result = this.runCommand(
          commandInfo.cmd, 
          path.join(process.cwd(), project.path),
          commandInfo.description
        );
        
        if (result.success) {
          passedCommands++;
        }
      }
    }

    // Summary
    console.log('\n' + '='.repeat(50));
    console.log('📊 LINTING SUMMARY');
    console.log('='.repeat(50));
    console.log(`Total Commands: ${totalCommands}`);
    console.log(`Passed: ${passedCommands}`);
    console.log(`Failed: ${totalCommands - passedCommands}`);
    
    if (this.errors.length > 0) {
      console.log('\n❌ ERRORS FOUND:');
      this.errors.forEach((error, index) => {
        console.log(`\n${index + 1}. ${error.description}`);
        console.log(`   Project: ${error.project}`);
        console.log(`   Command: ${error.command}`);
      });
    }

    if (this.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS:');
      this.warnings.forEach((warning, index) => {
        console.log(`${index + 1}. ${warning}`);
      });
    }

    const exitCode = this.errors.length > 0 ? 1 : 0;
    console.log(`\n🏁 Linting completed with exit code: ${exitCode}`);
    
    return exitCode;
  }
}

// Run the linting
const lintRunner = new LintRunner();
lintRunner.runAllLinting().then(code => {
  process.exit(code);
}).catch(error => {
  console.error('Fatal error during linting:', error);
  process.exit(1);
});
