// Importando el enrutador de express
import { Router } from 'express';
// Importando funciones del controlador
import { postAddProduct,getAddProduct } from '../controllers/products.controller.js'
// Creando una instancia del enrutador de express
const router = Router();

// POST /admin/add-product
router.post('/add-product', postAddProduct);

// GET /admin/add-product
router.get('/add-product', getAddProduct);




// Exportando el enrutador admin
export default router;
