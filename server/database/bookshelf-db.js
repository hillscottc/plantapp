const config = require('../../config');

const knex = require('knex')({client: 'pg', connection: config.databaseUrl });

module.exports = require('bookshelf')(knex);
