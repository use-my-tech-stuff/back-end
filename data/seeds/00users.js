const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
   // Deletes ALL existing entries
   return knex('users')
      .del()
      .then(function() {
         // Inserts seed entries
         return knex('users').insert([
            {
               userId: 1,
               username: 'tommy',
               password: bcrypt.hashSync('password', 11),
               firstName: 'Tommy',
               lastName: 'Carr',
               email: 'tommy@gmail.com',
               phone: 5104,
            },
            {
               userId: 2,
               username: 'linda',
               password: bcrypt.hashSync('password', 11),
               firstName: 'Linda',
               lastName: 'La',
               email: 'linda@gmail.com',
               phone: 5102,
            },
            {
               userId: 3,
               username: 'jimmy',
               password: bcrypt.hashSync('password', 11),
               firstName: 'Jimmy',
               lastName: 'Butler',
               email: 'jimmy@gmail.com',
               phone: 7072,
            },
            {
               userId: 4,
               username: 'nate',
               password: bcrypt.hashSync('password', 11),
               firstName: 'Nate',
               lastName: 'Boyette',
               email: 'nate@gmail.com',
               phone: 5102,
            },
            {
               userId: 5,
               username: 'yanna',
               password: bcrypt.hashSync('password', 11),
               firstName: 'Kayanna',
               lastName: 'Chandler',
               email: 'yanna@gmail.com',
               phone: 4152,
            },
         ]);
      });
};
