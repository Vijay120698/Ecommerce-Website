const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
//  const { Electronics } = require('../../client/src/components/Electronics');


router.post('/register', register);
router.post('/login', login);
// router.post('/electronics',Electronics);


module.exports = router;
