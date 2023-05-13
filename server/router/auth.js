const express =require('express');
const router =express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('../db');
const User = require('../model/userSchema');
const Contact = require('../model/contactSchema');

router.get('/', (req,res)=>{
    res.send(`Hello World server from router js`)

});

// ///using promisses send data to mongodb

// router.post('/register',  (req,res)=>{

//     const{name,email,phone,password,cpassword}=req.body; //ec6
    
//     if(!name || !email || !phone || !password || !cpassword){
//         return res.status(422).json({error:"fill form proper"});
//     }
//  ///this is for password same 
//     // if(password !== cpassword){
//     //     return res.status(422).json({error:"password dont match"});
//     // }
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"email already exist"});
//         }

//         const user = new User({name,email,phone,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message:"user Registered successfully"});
//             }).catch((err)=> res.status(500).json({error:"Failed to registered"}));
            
//     })

// });
///using promisses end

///registration

router.post('/register', async (req,res)=>{

    const{name,email,phone,password,cpassword}=req.body; //ec6
    
    if(!name || !email || !phone || !password || !cpassword){
        return res.status(422).json({error:"fill form proper"});
    }
    

    try{
        const userExist = await User.findOne({email:email});

        if(userExist){
            return res.status(422).json({error:"email already exist"});
        } else if(password !== cpassword){
            return res.status(422).json({error:"password dont match"});
         }
   

            const user = new User({name,email,phone,password,cpassword});

            await user.save();
            

            res.status(201).json({message:"user Registered successfully"});
        }catch(err){
         console.log(err);
        }
});


///--------contact  start------------------------------------------------
// router.post('/contactform',async(req,res)=>{
//     console.log(req.body);
//     res.json({message:"contact form"});


// });
router.post('/contactform', async(req, res) => {
    try {
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            message: req.body.message
        });

        await newContact.save();
        res.json({ message: 'Contact saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving contact' });
    }
});
///--------contact to submit end------------------------------------------------
// login route

router.post('/signin', async(req,res)=>{
    // console.log(req.body);
    // res.json({message:"awesome"})
    try{
        let token;
        const {email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({error:"fill  your credentials"});
        }


        const userLogin = await User.findOne({email:email});

        

        if(userLogin){
            const isMatch= await bcrypt.compare(password, userLogin.password);
            // console.log(`user is ${userLogin}`)
            token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+ 25892000000),
                httpOnly:true

            });
           

            
        
        if(!isMatch){

            return res.status(400).json({error:"invalid p credentials!"});

        
        }     else{res.json({message:`user logged in successfully with ${email}`})}

        }
        else{
             return res.status(400).json({error:"invalid e credentials!"});

        }
        
        

    }catch(err){
        console.log(err)

    }
})
    
module.exports= router;