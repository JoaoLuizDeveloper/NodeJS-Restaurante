const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Reserve = new Schema({
    Nome:{
        type: String,
        required: true
    },
    Hour: {
        type:String,
        required: true
    },
    Data: {
        type: Date,
        default: Date.now()
    } 
});

module.exports = mongoose.model("Reserves", Reserve);