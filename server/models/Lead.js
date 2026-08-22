const mongoose = require("mongoose");
const leadSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true
    },
    budget:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:"New",
    }
},
{timestamps: true}
);
module.exports = mongoose.model("Lead",leadSchema);