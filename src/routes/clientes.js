const express = require("express")
const cliemodel = require("../models/clientes");
const router = express.Router();

//get
router.get("/clientes", (req, res) => {
    cliemodel.find()
        .then(data => res.json(data))
        .catch((error) => res.json({mensaje: error}))
});

//get by id
router.get("/clientes/:id", (req, res) => {
    const {id} = req.params;
    cliemodel.findById(id)
        .then(data => res.json(data))
        .catch((error) => res.json({mensaje: error}))
});


//post
router.post("/clientes", (req, res) =>{
    const clientes = cliemodel(req.body);
    clientes.save()
    .then((data)=>res.json({mensaje:"Objeto guardado correctamente"}))
    .catch((error)=>res.status({mensaje:error}))
})

//put
router.put("/clientes/:id", (req, res) => {
    const {id} = req.params;
    const {nombre, apellido, correo, telefono, dni} = req.body;

    cliemodel.updateOne({_id:id}, {$set:{nombre, apellido, correo, telefono, dni}})
        .then((data)=>res.json({mensaje:"objeto actualizado"}))
        .catch((error)=>res.json({mensaje:error}))
});

//delete
router.delete("/clientes/:id", (req, res) => {
    const {id}=req.params;
    cliemodel.deleteOne({_id:id})
    .then((data)=>res.json({mensaje:"objeto eliminado"}))
    .catch((error)=>res.json({mensaje:error}))
});



module.exports = router;