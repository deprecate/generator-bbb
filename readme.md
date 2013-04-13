# Backbone Boilerplate generator [![Build Status](https://secure.travis-ci.org/yeoman/generator-bbb.png?branch=master)](http://travis-ci.org/yeoman/generator-bbb)

> This boilerplate is the product of much research and frustration. Existing
boilerplates freely modify Backbone core, lack a build process, and are very
prescriptive; Backbone Boilerplate changes that.

> Organize your application in a logical filesystem, develop your
Models/Collections/Views/Routers inside modules, and build knowing you have
efficient code that will not bottleneck your users.


## Usage

- Install it (only once): `npm install -g generator-bbb`

- Create a new folder and cd into it: `mkdir my-new-project && cd $_`

- Run `yo bbb` to scaffold out a BBB skeleton app

- Run `grunt` to build and `grunt server` to preview


## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after
  scaffolding has finished.

* `--test-framework=[framework]`

  Defaults to `mocha`. Can be switched for
  another supported testing framework like `jasmine`.


## Documentation

[Backbone Boilerplate documentation](https://github.com/tbranyen/backbone-boilerplate/wiki)


## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md)

When submitting an issue, please follow the [guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue.

When submitting a bugfix, write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

When submitting a new feature, add tests that cover the feature.


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
