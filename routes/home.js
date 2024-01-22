const express = require('express');
const path = require('path');
const router = express.Router();

const rootDir = require('../utils/path');
const adminData = require('./admin');

const productsController = require('../controllers/products');

router.get('/users', (req, res) => {
    res.send('<h1>Users</h1>');
    // console.log("In the uSers"); //Funneling through requests /usrs should be first then the '/' route
});

router.get('/',productsController.getProduct);




    // next(); // allows to move to the following middleware





module.exports = router;