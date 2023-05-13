const express =require ('express');
const mongoose = require('mongoose');
const dotenv =require('dotenv');
const app =express();
const cors = require('cors');



const User = require('./model/userSchema');
dotenv.config({path:'./config.env'});
require('./db');   
app.use(express.json());
app.use(
    cors({
        origin:'http://localhost:5173',
    })
);



//for routes links
app.use(require('./router/auth'));

const PORT = process.env.PORT;





 
//----------database----------------------------
// ,{
//     useNewUrlParser:true,
//     useCreateIndex:true, 
//     useUnifiedTopology:true,
//     useFindAndModify:false
// }
//-----------------;end data base------------------------------------

///middleware
const middleware=(req,res,next)=>{
    console.log("hello this is middleware")
    next()

};









///routing



// app.get('/', (req,res)=>{
//     res.send(  `Hello World server from server app`)

// });

app.get('/about', middleware,(req,res)=>{
    
    console.log("about crossed")
    res.send('Hello about World server')

});

app.get('/contact', (req,res)=>{
    res.send('Hello contact World server')

});
app.get('/signin', (req,res)=>{
    
    res.send('Hello signIn World server')

});
app.get('/signup', (req,res)=>{
    res.send('Hello registration signup World server')

});



app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})