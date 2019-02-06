exports.up = function(knex, Promise) {
   return knex.schema.createTable('users', tbl => {
      tbl.increments('userId');
      tbl.string('username')
         .unique()
         .notNullable();
      tbl.string('password').notNullable();
      tbl.string('firstName').notNullable();
      tbl.string('lastName').notNullable();
      tbl.string('email')
         .unique()
         .notNullable();
      tbl.integer('phone', 10);
   });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('users');
};
