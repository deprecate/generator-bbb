/*global describe:true, beforeEach:true, it:true */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('assert');

describe('BBB generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, './temp'), function (err) {
      if (err) {
        return done(err);
      }
      this.backbone = {};
      this.backbone.app = helpers.createGenerator('bbb:app', [
        '../../app', [
          helpers.createDummyGenerator(),
          'mocha:app'
        ]
      ]);
      done();
    }.bind(this));

  });

  it('generator can be required without throwing', function () {
    // not testing the actual run of generators yet
    this.all = require('../app');
  });

  it('should generate dotfiles', function (done) {
    // FIXME: Remove the Gruntfile.js created by the test.before function
    var expected = [
      ['package.json', /"name": "temp"/],
      'app/404.html',
      'app/favicon.ico',
      'app/robots.txt',
      'app/index.html',
      'app/.htaccess',
      '.bowerrc',
      '.gitignore',
      '.gitattributes',
      '.jshintrc',
      '.editorconfig',
      'Gruntfile.js',
      'app/scripts/config.js',
      'app/scripts/app.js',
      'app/scripts/main.js',
      'app/scripts/router.js',
      'app/scripts/libs/almond.js',
      'app/scripts/libs/backbone.js',
      'app/scripts/libs/jquery.js',
      'app/scripts/libs/lodash.js',
      'app/scripts/libs/require.js',
      'app/scripts/plugins/backbone.layoutmanager.js',
      'app/styles/index.css',
      'app/styles/h5bp.css',
      'app/styles/bootstrap.css'
    ];

    this.backbone.app.options['skip-install'] = true;
    this.backbone.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
