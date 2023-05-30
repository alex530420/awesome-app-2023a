// Importando el enrutador de express
import { Router } from 'express';

// Importando el gestor de rutas
import path from 'path';

// Creando una instancia del enrutador de express
const router = Router();

// Importando productos
import { products } from './admin.routes.js';
import httpStatus from 'http-status';


// GET /
router.get('/', (req, res)=>{
  // Mostrando productos en memoria
  console.log(products);
  console.log("📢 Sirviendo la ruta '/'");
  res.render('shop');
});

// GET /about
router.get('/about', (req, res) => {
  console.log("📢 Sirviendo la ruta '/about'");
  // Se contesta al server
  res.send(`
    <h1>🪄 About...</h1>
    <p>App for Fullstack Web Dev Course I!</p>
  `);
});

router.use((req, res)=>{
  console.log("📢error 404");
  res.status(httpStatus.NOT_FOUND).sendFile(path.resolve('views','notfound.hbs'));
});

export default router;