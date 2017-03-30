const workshopper = require('workshopper-adventure');
const path = require('path');

const learnyouhtml = workshopper({
  appDir: __dirname,
  languages: ['en'],
  header: require('workshopper-adventure/default/header'),
  footer: [{
    file: path.join(__dirname, 'i18n', 'footer', '{lang}.md'),
  }],
});

learnyouhtml.addAll([
  'HELLO WORLD',
  'TAGS',
  'ATTRIBUTES',
  'INLINE TAGS',
  'HEADINGS',
  'LISTS',
  'TABLES',
  'BLOCKS',
  'LINKS AND REFERENCES',
]);

module.exports = learnyouhtml;
