const mongoose = require('mongoose');
const DB = 'mongodb+srv://muktasj0721:12345@cluster0.zcot0cp.mongodb.net/Issue-tracker?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

//setting it to db
const db = mongoose.connection;

/** ------------------ CHECKING CONNECTION ------------------ **/
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});


// mongoose.connect('url') 
// mongoose.connect(url);
// const db=mongoose.connection;

//If any Error then Getting this Line
// db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


// db.once('open',()=>{
//     console.log("Connected to Database :: MongoDB ")
// });

module.exports=db;  //Exports db