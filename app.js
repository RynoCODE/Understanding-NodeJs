const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('In the middleware');
    next(); // allows to move to the following middleware
})

app.use((req, res, next)=>{
    console.log('In the second middleware');
    res.send('<h1>test</h1>');
})
console.log('test');

http.createServer(app).listen(3000);


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
