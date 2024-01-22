const Product = require('../models/product');
// const { products } = require('../routes/admin'); // minor issue with the products array


exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save()
    res.redirect('/');
}

exports.getProduct = (req, res)=>{
    // res.send('<h1>HELLO</h1>');
    // console.log('In the root');

    const products = Product.fetchAll();
    console.log('Products::',products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html')); //works similarly to /views/shop.html
    res.render('shop',{
        pageTitle: 'Shop',  
        prods: products,
        path: '/',

    });
}