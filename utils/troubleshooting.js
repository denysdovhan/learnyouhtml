const fs = require('fs');
const path = require('path');
const diff = require('./diff');

/**
 * Format troubleshooting message
 * This function reads the troubleshooting file and replaces kewords
 * by data providen in `data` object
 *
 * @param  {String} file Path to troubleshooting file:
 *                       @see ../i18n/troubleshooting/
 * @param  {Object} data Object with corresponding data
 * @return {String}
 */
const format = (file, data) => fs.readFileSync(file, 'utf8')
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

/**
 * Compose fail message
 * @param  {Object} data Object with data that's needed for formating
 * @return {Array}
 */
module.exports = function troubleshooting(data) {
  return [{
    text: format(data.file, data),
    type: 'md',
  }, {
    text: '---',
    type: 'md',
  }, {
    file: path.join(__dirname, '..', 'i18n', 'footer', '{lang}.md'),
  }];
};
