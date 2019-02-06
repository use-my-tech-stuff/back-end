exports.seed = function(knex, Promise) {
   // Deletes ALL existing entries
   return knex('items')
      .truncate()
      .then(function() {
         // Inserts seed entries
         return knex('items').insert([
            {
               itemId: 1,
               owner: 1,
               title: 'Portable Speaker',
               description: 'Great speaker for a gathering or party',
               brand: 'Bose',
               model: '5000XL',
               dailyPrice: 100,
               weeklyPrice: 450,
               label: 'Speaker',
               available: true,
               renter: null,
            },
            {
               itemId: 2,
               owner: 2,
               title: 'Projector',
               description:
                  'Awesome display for sports, movies and video games',
               brand: 'Samsung',
               model: 'H3000',
               dailyPrice: 50,
               weeklyPrice: 180,
               label: 'Display',
               available: true,
               renter: null,
            },
            {
               itemId: 3,
               owner: 3,
               title: 'HD Professional Grade Camera',
               description: 'Great camera for your professional shots',
               brand: 'Nikon',
               model: 'Extreme HD',
               dailyPrice: 80,
               weeklyPrice: 400,
               label: 'Camera',
               available: true,
               renter: null,
            },
            {
               itemId: 4,
               owner: 4,
               title: 'Karaoke Machine',
               description: 'Great for a karaoke party',
               brand: 'Sony',
               model: null,
               dailyPrice: 60,
               weeklyPrice: 250,
               label: 'Karaoke',
               available: true,
               renter: null,
            },
            {
               itemId: 5,
               owner: 5,
               title: 'Mini Portable Speaker',
               description: 'Great little speaker for a picnic or fishing trip',
               brand: 'Bose',
               model: 'Mini100',
               dailyPrice: 20,
               weeklyPrice: 100,
               label: 'Speaker',
               available: true,
               renter: null,
            },
            {
               itemId: 6,
               owner: 1,
               title: '32 inch Curve Monitor',
               description: `Dominate your enemies with this awesome monitor`,
               brand: 'Samsung',
               model: '32xl',
               dailyPrice: 60,
               weeklyPrice: 250,
               label: 'Monitor',
               available: false,
               renter: 3,
            },
         ]);
      });
};
