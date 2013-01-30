
var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman-generators');

module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);

  this.testFramework = this.options['test-framework'] || 'mocha';
  this.hookFor(this.testFramework , { as: 'app' });
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.setupEnv = function setupEnv() {
  // Copies the contents of the generator `templates`
  // directory into your users new application path
  this.sourceRoot(path.join(__dirname, 'templates'));


	// Copies the contents of the generator `templates`
	// directory into your users new application path
  this.directory('.','.', true);
};
