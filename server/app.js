const express =require ('express');
const mongoose = require('mongoose');
const app =express();


// database conn.


const DB= 'mongodb+srv://mern1234:mern1234@cluster0.tjfidvy.mongodb.net/mernstack?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=>{
    console.log(`connection successfully`)
}).catch((err)=> console.log(`no connection`));

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

}






///routing



app.get('/', (req,res)=>{
    res.send('Hello World server')

});

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



app.listen(3000,()=>{
    console.log("server is running at port 3000")
})