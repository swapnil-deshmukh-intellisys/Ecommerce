const fs = require('fs');

const filePath = 'node_modules/webpack-dev-middleware/lib/util.js';

// Read the file
const content = fs.readFileSync(filePath, 'utf8');

// Find the function and add the fix at the beginning
const lines = content.split('\n');
let modified = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('handleRangeHeaders(content, req, res) {')) {
    // Insert the fix right after the opening brace
    lines.splice(i + 1, 0, '  var rangeHeader = req.headers && req.headers.range;');
    lines.splice(i + 2, 0, '  if (!rangeHeader) {');
    lines.splice(i + 3, 0, '    return false;');
    lines.splice(i + 4, 0, '  }');
    modified = true;
    break;
  }
}

if (modified) {
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  console.log('✅ Successfully applied fix to root webpack-dev-middleware');
} else {
  console.log('❌ Could not find handleRangeHeaders function');
}
