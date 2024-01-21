//express imports
const express = require('express');
const app = express();
const path = require('path');

//body parser imports
const parses = require('body-parser'); //not used anymore

//routing imports
const adminRoutes = require('./routes/admin');
const home = require('./routes/home');

// Utils Import
const rootDir = require('./utils/path');

// Static files
app.use(express.static(path.join(__dirname,'public'))); // This is used to serve static files like css, js, images etc.

// Dynamic HTML
// app.set('view engine','pug'); // This is used to set the view engine to pug
app.set('views','views'); // This is used to set the views folder to views

//-----Ways to parse the body of the request-----
// app.use(parses.urlencoded({extended: false}));
app.use(express.urlencoded({extended: false}));
// app.use(express.json())
// -------




// importing routes through different directories
app.use('/admin',adminRoutes.routes); 
app.use(home);


// adding 404 error page
app.use((req, res, next) => {
    //res.status(404).send('<h1>Page not found</h1>');
    res.status(404).sendFile(path.join(rootDir,'views','404.html')); //This doesnt need ../ as it is already in the root directory
});


app.listen(3000); // creates a server and listens to port 3000

// http.createServer((req, res) => {
//     const url = req.url;
//     if(url === '/'){
//         res.write('<html>');
//         res.write('<body><h1>HELLO</h1></body>');
//         res.write('</html>');
//         return res.end();
//     }
//     console.log(req.url,req.method);
// }).listen(3000);
