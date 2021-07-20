const pgConnection =
  process.env.DATABASE_URL || "postgresql://postgres@localhost/prof";

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
      connectionString: pgConnection,
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10,
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
// 3. seeds: (Remove export part of statement (only return statement))