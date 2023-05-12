
//importando express js
import express from 'express';

const app = express(); //(req, resp)=>(un monton de codigo)
//registar el middlewear 
app.use((req,res,next)=>{
    console.log("📢Ejecutando el Middlewear 1");

    next();
});


app.use((req , res , next)=> {
    console.log(`${req.method} - ${req.url}`);
    
    next();
    });


app.use((req , res) => {
    console.log("⭐Respondiendo al cliente");
    
    res.send(`
    <h1>Welcome to expres</h1>
    <p>This is my awesome app</p>`
   
    );
    });
//creando servidor

//const server = htpp.createServer(app);

//definir puertos
const port=3000;
const ip = "0.0.0.0";

// arrancar el servidor

     app.listen(port, ip,(err)=>{
    console.log("📢 Sirviendo en http://localhost:3000");
    console.log(`📢 Sirviendo en http://${process.env.IP}:${process.env.PORT}`);
})