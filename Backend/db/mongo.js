const mongoose = require('mongoose');
require('dotenv').config();  // This ensures the environment variables are loaded

//const mongoURL = 'mongodb://localhost:27017/digitaldiner';
const mongoURL = process.env.MONGODB_URI;
console.log('mongodb URL:',mongoURL);

    mongoose.connect(mongoURL)

    .then(()=>{
        console.log("MongoDB Connection  Successfull.");
    })

    .catch((error) =>{
        console.error('Connection Failed',error.message);
        process.exit(1); // Stop the server if Mongo fails
    });



module.exports = mongoose;