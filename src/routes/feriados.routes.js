import { Router } from 'express';
import { getFeriadosByAno } from '../controllers/feriados.controller.js';

const router = Router();

/**
 * @openapi
 * /api/v1/feriados/{ano}:
 *   get:
 *     summary: "Lista feriados nacionais do Brasil por ano (fonte: BrasilAPI)"
 *     parameters:
 *       - in: path
 *         name: ano
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2026
 *     responses:
 *       200:
 *         description: "Lista de feriados"
 */

router.get('/:ano', getFeriadosByAno);

export default router;
