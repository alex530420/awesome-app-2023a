//importar el modulo http
import htpp from 'http';
//importando express js
import express from 'express';

const app = express(); //(req, resp)=>(un monton de codigo)

//creando servidor

const server = htpp.createServer(app);

//definir puertos
const port=3000;
const ip = "0.0.0.0";

// arrancar el servidor

server.listen(port, ip,(err)=>(
    console.log("📢 Sirviendo en htpp//localhost:3000")
    
))