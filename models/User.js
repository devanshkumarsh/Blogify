const { required } = require('joi');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }

})


userSchema.plugin(passportLocalMongoose);



let User = mongoose.model('User' , userSchema);
module.exports = User;