const express = require("express");
const inventSchema = require("../models/invent");
const router = express.Router();

//get
router.get("/inventario", (req, res) => {
    inventSchema.find()
        .then(data => res.json(data))
        .catch((error) => res.json({mensaje: error}))
});

//get by id
router.get("/inventario/:id", (req, res) => {
    const {id} = req.params;
    inventSchema.findById(id)
        .then(data => res.json(data))
        .catch((error) => res.json({mensaje: error}))
});


//post - Crear usuario
router.post("/inventario", (req, res) =>{
    const invent = inventSchema(req.body);
    invent.save()
    .then((data)=>res.json({mensaje:"Objeto guardado correctamente"}))
    .catch((error)=>res.status({mensaje:error}))
})

//put
router.put("/inventario/:id", (req, res) => {
    const {id} = req.params;
    const {tipo, marca, modelo, año, cantidad} = req.body;

    inventSchema.updateOne({_id:id}, {$set:{tipo, marca, modelo, año, cantidad}})
        .then((data)=>res.json({mensaje:"objeto actualizado"}))
        .catch((error)=>res.json({mensaje:error}))
});

//delete
router.delete("/inventario/:id", (req, res) => {
    const {id}=req.params;
    inventSchema.deleteOne({_id:id})
    .then((data)=>res.json({mensaje:"objeto eliminado"}))
    .catch((error)=>res.json({mensaje:error}))
});



module.exports = router;