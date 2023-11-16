//Importación de paquetes
const express = require("express")
const mongoose = require("mongoose")


//Definición de configuraciones
const app = express()
const puerto = 4000;

//rutas
app.get("/prueba", (req, res) => {res.send("Página de prueba secundaria")})
app.get("/", (req, res) => {res.send("Página principal")})



//Ejecución

mongoose.connect("mongodb+srv://Smartcode:smarcode@dbcluster.zbppxht.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {console.log("Conexión realizado con éxito")})
    .catch((error)=> {console.log("error")})
app.listen(puerto, () => {console.log("servidor escuchando en el puerto" +puerto)})

