const mongoose=require('mongoose');


// const DB = process.env.DATABASE
// module.exports = () => {
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	};
// 	try {
// 		mongoose.connect(DB, connectionParams);
// 		console.log("Connected to database successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Could not connect database!");
// 	}
// };

const DB ="mongodb+srv://mern1234:mern1234@cluster0.tjfidvy.mongodb.net/mernstack?retryWrites=true&w=majority"
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(()=>{
    console.log(`connection successfully`)
}).catch((err)=> console.log(`no connection`));