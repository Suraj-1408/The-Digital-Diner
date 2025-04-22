const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/digitaldiner';


    mongoose.connect(mongoURL)

    .then(()=>{
        console.log("MongoDB Connection  Successfull.");
    })

    .catch((error) =>{
        console.error('Connection Failed',error.message);
        process.exit(1); // Stop the server if Mongo fails
    });



module.exports = mongoose;