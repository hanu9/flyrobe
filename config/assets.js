// Module dependencies
var fs = require('fs');
var path = require('path');
var config_buffer = null;

var config_buffer = fs.readFileSync(path.resolve(__dirname, 'static-assets.json'), 'utf-8');

var config = JSON.parse(config_buffer);
module.exports = config;
