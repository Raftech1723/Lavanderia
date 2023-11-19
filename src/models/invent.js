const mongoose = require("mongoose")

const inventSchema = mongoose.Schema({
    tipo:{
        type: String,
        require: true
    },
    marca:{
        type: String,
        require: true
    },
    modelo:{
        type: String,
        require: true
    },
    año:{
        type: String,
        require: true
    },
    cantidad:{
        type: Number,
        require: true
    },
})


 
module.exports = mongoose.model("inventario", inventSchema);


/**
 * 
// Crea el modelo a partir del esquema
const InventarioModel = mongoose.model('inventario', inventarioSchema);

// Exporta el modelo para poder utilizarlo en otros archivos
module.exports = InventarioModel;
*/