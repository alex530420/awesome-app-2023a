// Importando el enrutador de express
import { Router } from 'express';

// Creando una instancia del enrutador de express
const router = Router();
// Exportando el enrutador admin
export default router;


// GET /add-product
router.get('/notfound', (req, res, next) => {
  // Si la petición es post pasamos el siguiente
  // Middleware
  if(req.method === "POST") return next();

  // Servimos el formulario
  console.log("error404");
  res.send(`
  <h1>NOT FOUND 400</h1>
  `);
});
// POST /add-product
router.post('/notfound', (req, res) => {
  // Realizaremos la extracción de
  // parametros dentro de la peticion
  console.log(req.body);
  res.redirect('/');
});