const fs = require('fs');
const diff = require('./diff');

module.exports = function troubleshooting(path, data) {
  return fs.readFileSync(path, 'utf8')
    // Replace breaking characters
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    // Inject data
    .replace(/%solution%/g, data.solution)
    .replace(/%attempt%/g, data.attempt)
    .replace(/%diff%/g, diff(data.attempt, data.solution))
    .replace(/%filename%/, data.filename);
};
