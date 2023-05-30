// Importando el enrutador de express
import { Router } from 'express';

//importando el gestor de rutas 
import path from 'path';
//importando ROOT DIR
import { ROOT_DIR } from '../helpers/paths.js';  

// Creando una instancia del enrutador de express
const router = Router();

// Creando datos en la memorian volatil
export const products = [];



// GET /add-product
router.get('/add-product', (req, res, next) => {
  // Si la petición es post pasamos el siguiente
  // Middleware
  if(req.method === "POST") return next();

  // Servimos el formulario
  console.log("📢 Sirviendo formulario...");
  res.render('add-product');
  //console.log(`ROOT_DIR: ${ROOT_DIR}`);
  //res.sendFile(path.join(ROOT_DIR,'views','add-product.hbs'));
});
// POST /add-product
router.post('/add-product', (req, res) => {
    // Realizaremos la desestructuracion de
  // "name" de la petición
  const { title } = req.body;
  // Agregamos el dato en la base de datos
  products.push(title);
  // Redireccionando
  res.redirect('/');
});

// Exportando el enrutador admin
export default router;
