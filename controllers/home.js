// Module dependecies
var page = require(__base + 'libs/page');
var debug = require('debug')('Flyrobe:server');

/**
 * Home page controller
 */

/**
* Method for homePage rendering
*/
exports.homePage = function(req, res, next) {
    page.render('index', {
      title: 'flyrobe.com',
      page: 'home'
    }, req, res);
};
