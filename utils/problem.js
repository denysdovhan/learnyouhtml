const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const express = require('express');

const parse = require('./parse');
const troubleshooting = require('./troubleshooting');

module.exports = (dirname) => {
  const exports = {};

  exports.init = function init(workshopper) {
    const lang = workshopper.i18n.lang();

    this.problem =
      { file: path.join(dirname, `${lang}.md`) };
    this.solutionPath =
      path.resolve(dirname, 'solution', 'solution.html');
    this.solution = [
      { text: fs.readFileSync(this.solutionPath), type: 'html' },
      { file: path.join(dirname, 'solution', `${lang}.md`) },
    ];
    this.troubleshooting =
      path.join(__dirname, '..', 'i18n', 'troubleshooting', `${lang}.md`);
  };

  exports.verify = function verify(args, done) {
    Promise.all([parse(args[0]), parse(this.solutionPath)])
      .then(([attempt, solution]) => {
        if (attempt === solution) {
          return done(true);
        }

        exports.fail = troubleshooting({
          troubleshooting: this.troubleshooting,
          filename: args[0],
          attempt,
          solution,
        });

        return done(false);
      })
      .catch((reason) => {
        console.error(reason);
        done(false);
      });
  };

  exports.run = function run(args, done) {
    const filename = args[0];
    let result = '';

    const watcher = chokidar.watch(filename);
    const server = express();

    watcher.on('add', (file) => {
      console.log(`${file} has been added.`);
      result = fs.readFileSync(filename, 'utf8');
    });

    watcher.on('change', (file) => {
      console.log(`${file} has been changed.`);
      result = fs.readFileSync(filename, 'utf8');
    });

    watcher.on('unlink', (file) => {
      console.warn(`${file} has been unlinked.`);
      done();
    });

    watcher.on('error', (file) => {
      console.error(`${file} has been errored.`);
      done();
    });

    server.get('*', (req, res) => {
      res.send(result.toString());
    });

    server.listen(process.env.HOST || 3000, () => {
      console.log(`
        Your webpage is served at /results
      `);
    });
  };

  return exports;
};
