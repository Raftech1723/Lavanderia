//Llamadas de paquetes
const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const servicios = require("./routes/servicios")
const clientes = require("./routes/clientes")
const inventario = require("./routes/invent")





//Definición de configuraciones
const app = express();
const puerto = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use("/api", servicios);
app.use("/api", clientes);
app.use("/api", inventario);




//rutas
app.get("/prueba", (req, res) => {res.send("Página de prueba secundaria")});
app.get("/", (req, res) => {res.send("Página principal")});

 


//Ejecución

mongoose.connect(process.env.mongodb)
    .then(() => {console.log("Conexión realizado con éxito")})
    .catch((error)=> {console.log("error")})
app.listen(puerto, () => {console.log("servidor escuchando en el puerto" +puerto)})

