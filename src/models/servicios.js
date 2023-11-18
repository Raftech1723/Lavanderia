const mongoose = require("mongoose")

const servmodel = mongoose.Schema({
    item:{
        type: String,
        require: true
    },
    precio:{
        type: String,
        require: true
    },
    cantidad:{
        type: String,
        require: true
    },
    fecha:{
        type: String,
        require: true
    },
    cliente:{
        type: String,
        require: true
    },
})

module.exports = mongoose.model("servicios", servmodel);

