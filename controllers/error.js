exports.get404 = (req, res, next) => {
    //res.status(404).send('<h1>Page not found</h1>');
    // res.status(404).sendFile(path.join(rootDir,'views','404.html')); //This doesnt need ../ as it is already in the root directory
    
    res.status(404).render('404',{pageTitle: "Didn't find the page"});

}
