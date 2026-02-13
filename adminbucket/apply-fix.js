const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'node_modules/@angular-devkit/build-angular/node_modules/webpack-dev-middleware/lib/util.js');

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// Apply the fix
const oldCode = `function handleRangeHeaders(content, req, res) {
  // assumes express API. For other servers, need to add logic to access
  // alternative header APIs
  res.setHeader('Accept-Ranges', 'bytes');

  if (req.headers.range) {`;

const newCode = `function handleRangeHeaders(content, req, res) {
  var rangeHeader = req.headers && req.headers.range;
  if (!rangeHeader) {
    return false;
  }

  // assumes express API. For other servers, need to add logic to access
  // alternative header APIs
  res.setHeader('Accept-Ranges', 'bytes');

  if (req.headers.range) {`;

content = content.replace(oldCode, newCode);

// Write back to file
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Fixed webpack-dev-middleware util.js');
