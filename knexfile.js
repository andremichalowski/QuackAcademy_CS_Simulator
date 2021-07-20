module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      connectionString:pgConnection,
      ssl: { rejectUnauthorized: false }
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
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

};

// Steps to return to later related to production vs. dev process:
