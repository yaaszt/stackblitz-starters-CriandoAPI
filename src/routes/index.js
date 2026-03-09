import { Router } from 'express';
import feriadosRoutes from './feriados.routes.js';
import bancosRoutes from './bancos.routes.js';

const router = Router();

router.use('/feriados', feriadosRoutes);
router.use('/bancos', bancosRoutes);

export default router;
