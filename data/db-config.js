// DEVELOPMENT
// const knex = require('knex');
// const knexfile = require('../knexfile.js');

// const environment = process.env.NODE_ENV || 'development'; 
// const config = knexfile[environment];

// module.exports = knex(config)

const knex = require('knex');
const knexfile = require('../knexfile.js');

const dbEnv = process.env.DB_ENV || 'development'; 
const config = knexfile[dbEnv]

module.exports = knex(config[dbEnv])