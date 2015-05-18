/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-cornify',

  included: function(app) {
    this._super.included.apply(this, arguments);

    var cornifyPath = path.join('vendor', 'cornify');

    this.app.import(path.join(cornifyPath, 'js',  'cornify.js'));
    this.app.import(path.join(cornifyPath, 'js',  'cornify_run.js'));
    this.app.import(path.join(cornifyPath, 'css', 'cornify.css'));
  }
};
