const express = require('express');
const router = express.Router();
const db = require("../models/index")



router.get('/', (req, res) => {
  console.log('details:');
  console.log('Authenticated user:', req.details); 
  const { username, price } = req.details;
  res.json({ username, price });
});

router.post('/cart', async (req, res) => {
  try {
    const { username, total } = req.body;

    if (!username || !total) {
      return res.status(400).json({ error: 'Invalid input' });
    }

    const newCartEntry = await db.Cart.create({ username:username, purchasedAmount:total });

    res.status(201).json(newCartEntry);
  } catch (error) {
    console.error('Error creating new cart entry:', error);
    res.status(500).json( {error:error.message
    });
  }
});


router.post('/products', async (req, res) => {
    try {
      const { name,price,image} = req.body;
  
      if (!name || !price || !image) {
        return res.status(400).json({ error: 'Invalid input' });
      }
  
      const newProductDetails = await db.Details.create({name:name,price:price,image:image });
  
      res.status(201).json(newProductDetails );
    } catch (error) {
      console.error('Error creating new Product:', error);
      res.status(500).json( {error:error.message});
    }
  });

module.exports = router;

router.get('/products', async (req, res) => {
    try {
      const getNewProduct = await db.Details.findAll();
      res.status(200).json(getNewProduct);
    } catch (error) {
      console.error('Error getting new Product:', error);
      res.status(500).json({ error: error.message });
    }
  });

  router.put('/products', async (req, res) => {
    try {
      const getNewProduct = await db.Details.findAll();
      res.status(200).json(getNewProduct);
    } catch (error) {
      console.error('Error getting new Product:', error);
      res.status(500).json({ error: error.message });
    }
  });
module.exports = router;


