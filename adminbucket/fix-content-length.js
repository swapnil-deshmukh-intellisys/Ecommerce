const fs = require('fs');

const filePath = 'node_modules/webpack-dev-middleware/lib/middleware.js';

// Read the file
const content = fs.readFileSync(filePath, 'utf8');

// Replace the problematic line
const oldCode = "res.setHeader('Content-Length', content.length);";
const newCode = "if (content) {\n    const length = Buffer.byteLength(content);\n    res.setHeader('Content-Length', length);\n  }";

const modifiedContent = content.replace(oldCode, newCode);

if (modifiedContent !== content) {
  fs.writeFileSync(filePath, modifiedContent, 'utf8');
  console.log('✅ Successfully fixed Content-Length header issue in middleware.js');
} else {
  console.log('❌ Could not find the Content-Length line to fix');
}
