const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    Nome: {
        type:String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Status:{
        type:Number,
        default:0
    },
    Password:{
        type: String,
        required: true
    },
    thumbnail: {
        type: String
    },
    Data: {
        type: Date,
        default: Date.now()
    }
}, 
    {
    toJSON: {
        virtuals: true,
    },
});

User.virtual('thumbnail_url').get(function(){
    return `http://localhost:5555/uploads/${this.thumbnail}`
})

module.exports = mongoose.model("Users", User);