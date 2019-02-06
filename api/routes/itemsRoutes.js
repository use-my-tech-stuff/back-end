const express = require('express');
const route = express.Router();
const { cloudinaryConfig, uploader } = require('../../config/cloudinaryConfig');
const { multerUploads, dataUri } = require('../../middleware/multer');

const db = require('../../data/dbConfig');
cloudinaryConfig(route);

route.get('/', async (req, res) => {
   try {
      const items = await db('items');
      res.status(200).json(items);
   } catch (err) {
      res.status(500).json({ message: 'Could not retrieve the list of items' });
   }
});

route.get('/:id', async (req, res) => {
   const { id } = req.params;

   try {
      const item = await db('items')
         .where({ itemId: id })
         .first();

      !item
         ? res.status(404).json({ error: 'Item does not exist' })
         : res.status(200).json(item);
   } catch (err) {
      res.status(500).json({ error: 'Unable to fetch the item' });
   }
});

route.post('/', async (req, res) => {
   const creds = req.body;

   try {
      const itemId = await db('items').insert(creds);

      res.status(201).json({
         message: 'A new item has been added',
         itemId,
      });
   } catch (err) {
      res.status(500).json({ error: 'Unable to add a new item' });
   }
});

route.patch('/:id', async (req, res) => {
   const { id } = req.params;
   const changes = req.body;

   try {
      const item = await db('items')
         .where({ itemId: id })
         .first();

      !item
         ? res.status(404).json({ error: 'Item does not exist' })
         : await db('items')
              .where({ itemId: id })
              .update(changes);
      res.status(202).json({
         message: `item: '${item.title}' has been updated`,
         changes,
      });
   } catch (err) {
      res.status(500).json({ error: 'Unable to update the item' });
   }
});

route.delete('/:id', async (req, res) => {
   const { id } = req.params;

   try {
      const item = await db('items')
         .where({ itemId: id })
         .first();

      !item
         ? res.status(404).json({ error: 'Item does not exist' })
         : await db('items')
              .where({ itemId: id })
              .delete();

      res.status(202).json({ message: 'The item has been deleted.' });
   } catch (err) {
      res.status(500).json({ error: 'Unable to delete the item' });
   }
});

// uploads image to Cloudinary and returns a message and image url
route.post('/upload', multerUploads, (req, res) => {
   if (req.file) {
      const file = dataUri(req).content;
      return uploader.upload(file).then(result => {
         const image = result.url;
         return res
            .status(200)
            .json({
               message:
                  'Your image has been uploaded successfully to cloudinary',
               image: image,
            })
            .catch(err =>
               res.status(400).json({
                  message: 'Something went wrong while processing your request',
                  err: err,
               })
            );
      });
   }
});

module.exports = route;
