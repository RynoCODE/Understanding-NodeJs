const express = require('express');
const app = express();


app.use(express.urlencoded({extended: false})); // parses the body of the request

app.use('/add-product', (req, res) => {
    res.send('<form action="/product" method="POST"><input type="text" name="productTitle"><button type="submit">Add</button></form>')
}); 
app.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/users', (req, res) => {
    res.send('<h1>Users</h1>');
    // console.log("In the uSers"); //Funneling through requests /usrs should be first then the '/' route
});

app.use('/',(req, res)=>{
    res.send('<h1>HELLO</h1>');
    // console.log('In the root');


    // next(); // allows to move to the following middleware
})



app.listen(3000);


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
