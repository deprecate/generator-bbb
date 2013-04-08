/*global describe:true, beforeEach:true, it:true */
'use strict';
var path    = require('path');
var helpers = require('yeoman-generator').test;
var assert  = require('assert');

describe('BBB generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, './temp'), function (err) {
      if (err) {
        return done(err);
      }
      this.backbone = {};
      this.backbone.app = helpers.createGenerator('bbb:all', [
        '../../all', [
          helpers.createDummyGenerator(),
          'mocha:app'
        ]
      ]);
      done();
    }.bind(this));

  });

  it('generator can be required without throwing', function () {
    // not testing the actual run of generators yet
    this.all = require('../all');
  });

  it('should generate dotfiles', function (done) {
    // FIXME: Remove the Gruntfile.js created by the test.before function
    var expected = [
      ['package.json', /"name": "temp"/],
      'Gruntfile.js',
      'app/404.html',
      'app/favicon.ico',
      'app/robots.txt',
      'app/index.html',
      'app/.htaccess',
      '.gitignore',
      '.gitattributes',
      '.jshintrc',
      '.editorconfig',
      'Gruntfile.js',
      'app/scripts/config.js',
      'app/scripts/app.js',
      'app/scripts/main.js',
      'app/scripts/router.js'
    ];

    helpers.mockPrompt(this.backbone.app, {
      'compassBootstrap': 'Y',
      'includeRequireJS': 'N'
    });

    this.backbone.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });

  });

});

