const knex = require('knex');
const knexfile = require('../knexfile.js');

// DEVELOPMENT
// const dbEnv = process.env.NODE_ENV || 'development'; 

//PRODUCTION
const dbEnv = process.env.DB_ENV || 'development'; 

const config = knexfile[dbEnv]

module.exports = knex(config)