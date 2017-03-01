const fs = require('fs');
const path = require('path');
const remark = require('remark');
const html = require('remark-html');
const express = require('express');
const chokidar = require('chokidar');
const open = require('openurl').open;
const equal = require('deep-equal');

const fail = require('./fail');

module.exports = (dirname) => {
  const exports = {};

  exports.init = function init(workshopper) {
    // Get lang code
    const lang = workshopper.i18n.lang();

    this.problem =
      { file: path.join(dirname, `${lang}.md`) };
    this.solutionPath =
      path.resolve(dirname, 'solution', 'solution.html');
    this.solution = [
      { text: fs.readFileSync(this.solutionPath), type: 'plain' },
      { file: path.join(dirname, 'solution', `${lang}.md`) },
    ];
    this.troubleshooting =
      path.join(__dirname, '..', 'i18n', 'troubleshooting', `${lang}.md`);
  };

  exports.verify = function verify(args, done) {
    // do verifying
    return done(true); // everything is OK
    // return done(false); // something wen't wrong
  };

  exports.run = function run(args, done) {
    // run the file
  };

  return exports;
};
