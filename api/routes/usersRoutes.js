const express = require('express');
const route = express.Router();

const db = require('../../data/dbConfig');

route.get('/', async (req, res) => {
   console.log('req headers', req.headers);
   try {
      const users = await db('users');
      res.status(200).json(users);
   } catch (err) {
      res.status(500).json({ message: 'Could not retrieve the list of users' });
   }
});

route.get('/:id', async (req, res) => {
   const { id } = req.params;

   try {
      const user = await db('users')
         .where({ userId: id })
         .first();

      !user
         ? res.status(404).json({ error: 'User does not exist' })
         : res.status(200).json(user);
   } catch (err) {
      res.status(500).json({ error: 'Unable to fetch the user' });
   }
});

route.get('/:id/items', async (req, res) => {
   const { id } = req.params;

   try {
      const user = await db('users')
         .where({ userId: id })
         .first();
      const items = await db('items').where({ owner: id });

      !user
         ? res.status(404).json({ error: 'User does not exist' })
         : res.status(202).json(items);
   } catch (err) {
      res.status(500).json({ error: `Unable to fetch the user's items` });
   }
});

route.patch('/:id', async (req, res) => {
   const { id } = req.params;
   const changes = req.body;

   try {
      const user = await db('users')
         .where({ userId: id })
         .first();

      !user
         ? res.status(404).json({ error: 'User does not exist' })
         : await db('users')
              .where({ userId: id })
              .update(changes);
      res.status(202).json({
         message: `User: '${user.username}' has been updated`,
      });
   } catch (err) {
      res.status(500).json({ error: 'Unable to update the user' });
   }
});

route.delete('/:id', async (req, res) => {
   const { id } = req.params;

   try {
      const user = await db('users')
         .where({ userId: id })
         .first();

      !user
         ? res.status(404).json({ error: 'User does not exist' })
         : await db('users')
              .where({ userId: id })
              .delete();

      res.status(202).json({ message: 'The user has been deleted.' });
   } catch (err) {
      res.status(500).json({ error: 'Unable to delete the user' });
   }
});

module.exports = route;
