// const knex = require('knex');
// const knexConfig = require('../knexfile');

// module.exports = knex(knexConfig.development);

const dbEngine = process.env.DB || 'production';
const config = require('../knexfile.js')[dbEngine;]

module.exports = require('knex')(config);