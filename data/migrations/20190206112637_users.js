exports.up = function(knex, Promise) {
   return knex.schema.createTable('users', tbl => {
      tbl.increments('userId');
      tbl.string('username')
         .unique()
         .notNullable();
      tbl.string('password').notNullable();
      tbl.string('firstname').notNullable();
      tbl.string('lastname').notNullable();
      tbl.string('thumbnail', 500);
      tbl.string('email')
         .unique()
         .notNullable();
      tbl.bigInteger('phone', 10);
   });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('users');
};
