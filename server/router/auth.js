const express =require('express');
const router =express.Router();
require('../db');
const User = require('../model/userSchema');

router.get('/', (req,res)=>{
    res.send(`Hello World server from router js`)

});

router.post('/register', async (req,res)=>{

    const{name,email,phone,password,cpassword}=req.body; //ec6
    
    if(!name || !email || !phone || !password || !cpassword){
        return res.status(422).json({error:"fill form proper"});
    }
 ///this is for password same 
    // if(password !== cpassword){
    //     return res.status(422).json({error:"password dont match"});
    // }
    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"email already exist"});
        }

        const user = new User({name,email,phone,password,cpassword});

        user.save().then(()=>{
            res.status(201).json({message:"user Registered successfully"});
            }).catch((err)=> res.status(500).json({error:"Failed to registered"}));
            
    })

});
module.exports= router;