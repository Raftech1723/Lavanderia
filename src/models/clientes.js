const mongoose = require("mongoose")

const cliemodel = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    apellido:{
        type: String,
        require: true
    },
    correo:{
        type: String,
        require: true
    },
    telefono:{
        type: String,
        require: true
    },
    dni:{
        type: Number,
        require: true
    },
})

module.exports = mongoose.model("clientes", cliemodel);

