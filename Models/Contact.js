const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Contact = new Schema({
    Titulo:{
        type: String,
        required: true
    },
    Descricao: {
        type:String,
        required: true
    },
    Data: {
        type: Date,
        default: Date.now()
    } 
});

module.exports = mongoose.model("Contacts", Contact);