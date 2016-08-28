var debug = require('debug')('Flyrobe:server');
var path = require('path');
var nunjucks = require('nunjucks');
var assetsConfig = require(__base + 'config/assets');
var minify = require('html-minifier').minify;


/**
 * @method render
 * @param {String} view - view to be rendered
 * @param {Object} data - payload for rendering
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Number} status - http status code
 */
exports.render = function(view, data, req, res, status) {
  __nunjucksEnv.addGlobal('assets_config', assetsConfig);
  res.render(view, data, function (err, html) {

    res.status(status || 200).send(html);
  });
};
