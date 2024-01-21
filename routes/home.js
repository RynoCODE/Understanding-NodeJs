const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.send('<h1>Users</h1>');
    // console.log("In the uSers"); //Funneling through requests /usrs should be first then the '/' route
});

router.get('/',(req, res)=>{
    res.send('<h1>HELLO</h1>');
    // console.log('In the root');


    // next(); // allows to move to the following middleware
})





module.exports = router;