/*
 * {{less}}
 * https://github.com/jonschlinkert/helper-less
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';

// node_modules
var path = require('path');
var less = require('less');
var _    = require('lodash');


// From grunt-contrib-less
var lessOptions = {
  parse: ['paths', 'optimization', 'filename', 'strictImports', 'syncImport', 'dumpLineNumbers', 'relativeUrls', 'rootpath'],
  render: ['compress', 'cleancss', 'ieCompat', 'strictMath', 'strictUnits', 'sourceMap', 'sourceMapFilename', 'sourceMapBasepath', 'sourceMapRootpath']
};

module.exports.register = function(Handlebars, options, params) {

  var opts = options || {};
  opts.less = opts.less || {};

  var grunt = params.grunt;
  var _ = grunt.util._;

  var srcFile = grunt.task.current.data.src;
  var basename = path.basename(srcFile, path.extname(srcFile));

  var compile = function(src, options) {
    options.paths = options.paths || [path.dirname(srcFile)];
    options = _.extend(options || {}, {
      verbose: true,
      relativeUrls: true,
      strictImports: false,
      processImports: true
    }, opts.less);

    var result;
    var parser = new less.Parser(_.pick(options, lessOptions.parse));

    parser.parse(src, function(err, tree) {
      if(err) {
        return;
      } else {
        // Load custom functions (from grunt-contrib-less)
        if (options.customFunctions) {
          Object.keys(options.customFunctions).forEach(function (name) {
            less.tree.functions[name.toLowerCase()] = function () {
              var args = [].slice.call(arguments);
              args.unshift(less);
              return new less.tree.Anonymous(options.customFunctions[name].apply(this, args));
            };
          });
        }
        var minifyOptions = _.pick(options, lessOptions.render);
        result = tree.toCSS(options);
      }
    });
    return result;
  };

  Handlebars.registerHelper('less', function (options) {
    options.hash = options.hash || {};
    opts.originalAssets = opts.originalAssets || '';
    opts.less.destdir = opts.less.destdir || opts.originalAssets;
    options = _.extend(options, opts, options.hash);

    var less = options.fn(this).replace(/<\/?style(.+)?>/g, '');
    if(options.hash.dest) {
      var dest = path.join(opts.less.destdir, options.hash.dest);
      grunt.file.write(dest, compile(less, options));
    } else {
      return new Handlebars.SafeString('<style>\n' + compile(less, options) + '\n</style>');
    }
  });
};

