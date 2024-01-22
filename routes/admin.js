const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../utils/path');


const productsController = require('../controllers/products');
const { get } = require('http');


router.get('/add-product', productsController.getAddProduct);
// (req, res) => {
    //res.send('<form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form>')
    
    // below method without the utils path
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); 
    
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    
// }); 
// router.post("/add-product", (req, res) => {
//     // console.log(req.body);
    
//     products.push({title: req.body.title});
    
//     res.redirect('/');
// });

const products = productsController.products;
router.post("/add-product", productsController.postAddProduct);
exports.routes = router;
exports.products = products;