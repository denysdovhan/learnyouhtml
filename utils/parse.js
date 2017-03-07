const fs = require('fs');
const HTMLParser = require('fast-html-parser');

module.exports = filename => new Promise((resolve, reject) => {
  fs.readFile(filename, 'utf8', (err, content) => {
    if (err) return reject(err);
    const tree = HTMLParser.parse(content);
    return resolve(tree.firstChild.structure);
  });
});
