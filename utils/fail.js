const path = require('path');
const troubleshooting = require('./troubleshooting');

module.exports = data => [{
  text: troubleshooting(data.troubleshooting, {
    filename: data.filename,
    solution: data.solution,
    attempt: data.attempt,
  }),
  type: 'md',
}, {
  text: '---',
  type: 'md',
}, {
  file: path.join(__dirname, '..', 'i18n', 'footer', '{lang}.md'),
}];
