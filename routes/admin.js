const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../utils/path');
const products = [];


router.get('/add-product', (req, res) => {
    //res.send('<form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form>')
    
    // below method without the utils path
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); 
    
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    
}); 
router.post("/add-product", (req, res) => {
    // console.log(req.body);
    
    products.push({title: req.body.title});
    
    res.redirect('/');
});
exports.routes = router;
exports.products = products;