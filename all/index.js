var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var Generator = module.exports = function Generator() {
  yeoman.generators.Base.apply(this, arguments);

  this.testFramework = this.options['test-framework'] || 'mocha';
  this.hookFor(this.testFramework, { as: 'app' });

  this.on('end', function () {
    if (['all', 'bbb'].indexOf(this.generatorName) >= 0) {
      console.log('\nI\'m all done. Just run ' + 'npm install'.bold.yellow + ' to install the required dependencies.');
    }
  });
};

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.setupEnv = function setupEnv() {
  // Copies the contents of the generator `templates`
  // directory into your users new application path
  this.sourceRoot(path.join(__dirname, 'templates'));

  // Copies the contents of the generator `templates/app`
  // directory into your users new application path
  this.directory('app', 'app', true);
};

Generator.prototype.bower = function bower() {
  this.copy('bowerrc', '.bowerrc');
};

Generator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
};

Generator.prototype.jshint = function jshint() {
  this.copy('jshintrc', '.jshintrc');
};

Generator.prototype.editorConfig = function editorConfig() {
  this.copy('editorconfig', '.editorconfig');
};

Generator.prototype.gruntfile = function gruntfile() {
  this.template('_gruntfile.js', 'gruntfile.js');
};

Generator.prototype.packageJSON = function packageJSON() {
  this.template('_package.json', 'package.json');
};
