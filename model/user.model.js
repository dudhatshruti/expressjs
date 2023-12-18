const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:Number,
    firstName:{
        type:String,
        unique:true
    },
    lastName: String,
    age: Number,
    height:Number,
    gender: [String],
    phone:String,
    isDelete:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('users',userSchema);