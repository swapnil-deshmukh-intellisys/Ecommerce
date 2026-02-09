#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Coverage aggregation script for monorepo
class CoverageAggregator {
  constructor() {
    this.projects = [
      { name: 'frontend', path: 'adminbucket', coveragePath: 'coverage/lcov.info' },
      { name: 'backend', path: 'adminbucket/nginx-1.4.1', coveragePath: 'coverage.info' }
    ];
    this.mergedCoverage = '';
  }

  readCoverageFile(filePath) {
    try {
      if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf8');
      }
    } catch (error) {
      console.warn(`Warning: Could not read coverage file ${filePath}: ${error.message}`);
    }
    return '';
  }

  mergeCoverageReports() {
    console.log('Merging coverage reports...');
    
    let mergedContent = '';
    let hasCoverage = false;

    for (const project of this.projects) {
      const fullPath = path.join(project.path, project.coveragePath);
      const coverage = this.readCoverageFile(fullPath);
      
      if (coverage) {
        console.log(`Found coverage for ${project.name}: ${fullPath}`);
        mergedContent += `\n# Coverage for ${project.name}\n`;
        mergedContent += coverage;
        hasCoverage = true;
      } else {
        console.log(`No coverage found for ${project.name}: ${fullPath}`);
      }
    }

    if (hasCoverage) {
      // Create merged coverage directory
      const mergedDir = 'coverage';
      if (!fs.existsSync(mergedDir)) {
        fs.mkdirSync(mergedDir, { recursive: true });
      }

      // Write merged coverage file
      const mergedFile = path.join(mergedDir, 'lcov.info');
      fs.writeFileSync(mergedFile, mergedContent);
      console.log(`Merged coverage written to: ${mergedFile}`);

      // Generate summary report
      this.generateSummary(mergedContent);
    } else {
      console.log('No coverage files found to merge');
    }
  }

  generateSummary(coverageContent) {
    const summary = {
      timestamp: new Date().toISOString(),
      projects: this.projects.map(p => p.name),
      totalLines: 0,
      coveredLines: 0,
      coverage: 0
    };

    // Simple coverage parsing (you may want to use a proper lcov parser)
    const lines = coverageContent.split('\n');
    let totalLines = 0;
    let coveredLines = 0;

    for (const line of lines) {
      if (line.startsWith('LH:')) {
        const parts = line.split(':');
        if (parts.length >= 3) {
          totalLines += parseInt(parts[1]) || 0;
          coveredLines += parseInt(parts[2]) || 0;
        }
      }
    }

    summary.totalLines = totalLines;
    summary.coveredLines = coveredLines;
    summary.coverage = totalLines > 0 ? (coveredLines / totalLines * 100).toFixed(2) : 0;

    // Write summary
    const summaryFile = 'coverage/summary.json';
    fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2));
    
    console.log('\n=== Coverage Summary ===');
    console.log(`Total Lines: ${summary.totalLines}`);
    console.log(`Covered Lines: ${summary.coveredLines}`);
    console.log(`Coverage: ${summary.coverage}%`);
  }
}

// Run the aggregator
const aggregator = new CoverageAggregator();
aggregator.mergeCoverageReports();
