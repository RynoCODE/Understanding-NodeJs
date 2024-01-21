//express imports
const express = require('express');
const app = express();

//body parser imports
const parses = require('body-parser');

//routing imports
const adminRoutes = require('./routes/admin');
const home = require('./routes/home');

//Ways to parse the body of the request
// app.use(parses.urlencoded({extended: false}));
app.use(express.urlencoded({extended: false})); // parses the body of the request
// app.use(express.json())




// importing routes through different directories
app.use(adminRoutes); 
app.use(home);



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
