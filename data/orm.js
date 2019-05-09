const config = require('../config')();
const environment = config.NODE_ENV.toLowerCase();
const knexConfig = require('../knexfile')[environment];
const knex = require('knex')(knexConfig);
const bookshelf = require('bookshelf')(knex);
// Load plugins
bookshelf.plugin('registry');
bookshelf.plugin('visibility');

module.exports = bookshelf;