// Debug script to check test file discovery
const fs = require('fs');
const path = require('path');

console.log('🔍 Debugging test file discovery...\n');

// Check if test.ts exists
const testTsPath = 'src/test.ts';
if (fs.existsSync(testTsPath)) {
  console.log('✅ src/test.ts exists');
  const content = fs.readFileSync(testTsPath, 'utf8');
  console.log('📄 Content includes require.context:', content.includes('require.context'));
} else {
  console.log('❌ src/test.ts missing');
}

// Check for .spec.ts files
function findSpecFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      findSpecFiles(fullPath, files);
    } else if (item.endsWith('.spec.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

const specFiles = findSpecFiles('src');
console.log(`\n📁 Found ${specFiles.length} .spec.ts files:`);
specFiles.slice(0, 5).forEach(file => console.log(`  - ${file}`));
if (specFiles.length > 5) {
  console.log(`  ... and ${specFiles.length - 5} more`);
}

// Check tsconfig.spec.json
const tsconfigPath = 'src/tsconfig.spec.json';
if (fs.existsSync(tsconfigPath)) {
  console.log('\n✅ src/tsconfig.spec.json exists');
  const config = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
  console.log('📄 Include patterns:', config.include);
  console.log('📄 Files array:', config.files);
} else {
  console.log('\n❌ src/tsconfig.spec.json missing');
}
