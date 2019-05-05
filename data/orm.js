const config = require('../config')();
const knexConfig = require('../knexfile')[config.NODE_ENV]
const knex = require('knex')(knexConfig);
const bookshelf = require('bookshelf')(knex);
// Load plugins
bookshelf.plugin('registry');
bookshelf.plugin('visibility');

module.exports = bookshelf;