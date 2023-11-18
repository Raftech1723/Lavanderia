//Llamadas de paquetes
const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const servicios = require("./routes/servicios")


//Definición de configuraciones
const app = express();
const puerto = 4000;

//middleware
app.use(express.json());

//rutas
app.get("/prueba", (req, res) => {res.send("Página de prueba secundaria")});
app.get("/", (req, res) => {res.send("Página principal")});

app.use("/api", servicios); 


//Ejecución

mongoose.connect(process.env.mongodb)
    .then(() => {console.log("Conexión realizado con éxito")})
    .catch((error)=> {console.log("error")})
app.listen(puerto, () => {console.log("servidor escuchando en el puerto" +puerto)})

