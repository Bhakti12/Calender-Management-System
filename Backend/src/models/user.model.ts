import mongoose from "mongoose";

var userModel = new mongoose.Schema({
    name: {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    }
},{
    timestamps : true
});

module.exports = mongoose.model(
    'User',
    userModel,
    'User'
);