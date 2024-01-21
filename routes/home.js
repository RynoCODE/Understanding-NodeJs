const express = require('express');
const path = require('path');
const router = express.Router();

const rootDir = require('../utils/path');
const adminData = require('./admin');

router.get('/users', (req, res) => {
    res.send('<h1>Users</h1>');
    // console.log("In the uSers"); //Funneling through requests /usrs should be first then the '/' route
});

router.get('/',(req, res)=>{
    // res.send('<h1>HELLO</h1>');
    // console.log('In the root');

    console.log('Products::',adminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); //works similarly to /views/shop.html

    // res.render('shop');




    // next(); // allows to move to the following middleware
})





module.exports = router;