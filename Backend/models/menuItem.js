const mongoose = require('mongoose');

//create a schema
const menuItemSchema = new mongoose.Schema({
    //attributes.
    name:{
        type:String,
        required:true,
    },

    category:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        required:true,
    },

    price:{
        type:Number,
        required:true,
    },

    availability:{
        type:Boolean,
        default:true,
    }

},
{
    timestamps:true     //Automatically adds createdAt and updatedAt fields
});


//creating a model.
const MenuItem = mongoose.model('MenuItem',menuItemSchema);

module.exports = MenuItem;