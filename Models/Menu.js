const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Menu = new Schema({
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

module.exports = mongoose.model("Menus", Menu);