import express from 'express';
import { config } from '../core/config.js';

const router = express.Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Verifica o status de saúde da aplicação
 *     tags: [Health]
 *     description: Retorna o status atual da aplicação, ambiente e timestamp
 *     responses:
 *       200:
 *         description: Aplicação está saudável
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: healthy
 *                 app:
 *                   type: string
 *                   example: elfa-backend
 *                 env:
 *                   type: string
 *                   example: local
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: 2024-01-29T10:30:00.000Z
 */
router.get('/', (req, res) => {
  res.json({
    status: 'healthy',
    app: config.appName,
    env: config.env,
    timestamp: new Date().toISOString()
  });
});

export default router;
