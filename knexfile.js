// Update with your config settings.

const dbConnection = process.env.DATABASE_URL;

module.exports = {
   development: {
      client: 'pg',
      connection: 'postgres://localhost/5000',
      migrations: {
         directory: './data/migrations',
      },
      seeds: {
         directory: './data/seeds',
      },
      useNullAsDefault: true,
   },

   production: {
      client: 'pg',
      connection: dbConnection,
      pool: {
         min: 2,
         max: 10,
      },
      migrations: {
         directory: './data/migrations',
      },
      seeds: {
         directory: './data/seeds',
      },
      useNullAsDefault: true,
   },
};
