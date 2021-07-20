module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/questionsP.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
    client: 'pg',
    connection: {
      connectionString:pgConnection,
      ssl: { rejectUnauthorized: false }
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

};

//Steps to review/add later for prod steps:
// 1. Knex file: production update
// 2. db-config.js: 'DB_ENV'