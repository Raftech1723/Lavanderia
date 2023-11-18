const express = require("express")
const servmodel = require("../models/servicios");
const router = express.Router();

//get
router.get("/servicios", (req, res) => {
    servmodel.find()
        .then(data => res.json(data))
        .catch((error) => res.json({mensaje: error}))
});

//get by id
router.get("/servicios/:id", (req, res) => {
    const {id} = req.params;
    servmodel.findById(id)
        .then(data => res.json(data))
        .catch((error) => res.json({mensaje: error}))
});


//post
router.post("/servicios", (req, res) =>{
    const servicios = servmodel(req.body);
    servicios.save()
    .then((data)=>res.json({mensaje:"Objeto guardado correctamente"}))
    .catch((error)=>res.status({mensaje:error}))
})

//put
router.put("/servicios/:id", (req, res) => {
    const {id} = req.params;
    const {item, precio, cantidad, fecha, cliente} = req.body;

    servmodel.updateOne({_id:id}, {$set:{item, precio, cantidad, fecha, cliente}})
        .then((data)=>res.json({mensaje:"objeto actualizado"}))
        .catch((error)=>res.json({mensaje:error}))
});

//delete
router.delete("/servicios/:id", (req, res) => {
    const {id}=req.params;
    servmodel.deleteOne({_id:id})
    .then((data)=>res.json({mensaje:"objeto eliminado"}))
    .catch((error)=>res.json({mensaje:error}))
});



module.exports = router;