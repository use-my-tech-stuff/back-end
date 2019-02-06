// Update with your config settings.
const dbConnection = process.env.DATABASE_URL;

module.exports = {
   development: {
      client: 'sqlite3',
      connection: {
         filename: './dev.sqlite3',
      },
      useNullAsDefault: true,
      migrations: {
         directory: './data/migrations',
      },
      seeds: {
         directory: './data/seeds',
      },
   },

   production: {
      client: 'pg',
      connection: dbConnection,
      pool: {
         min: 2,
         max: 10,
      },
      migrations: {
         tableName: 'knex_migrations',
         directory: './data/migrations',
      },
      seeds: {
         directory: './data/seeds',
      },
      useNullAsDefault: true,
   },
};
