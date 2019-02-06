exports.up = function(knex, Promise) {
   return knex.schema.createTable('items', tbl => {
      tbl.increments('itemId');
      tbl.integer('owner')
         .notNullable()
         .unsigned()
         .references('userId')
         .inTable('users');
      tbl.string('title').notNullable();
      tbl.text('description', 'longtext').notNullable();
      tbl.string('brand').notNullable();
      tbl.string('model');
      tbl.string('label');
      tbl.float('dailyPrice').notNullable();
      tbl.float('weeklyPrice').notNullable();
      tbl.boolean('available').notNullable();
      tbl.integer('renter')
         .unsigned()
         .references('userId')
         .inTable('users');
   });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('items');
};
