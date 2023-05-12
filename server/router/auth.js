const express =require('express');
const router =express.Router();

router.get('/', (req,res)=>{
    res.send(`Hello World server from router js`)

});

router.post('/register',(req,res)=>{
    console.log(req.body);
    // res.json({ message : req.body}); //this for check with postman
    // res.send(`my router /register`)

});
module.exports= router;