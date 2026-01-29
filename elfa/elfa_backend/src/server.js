import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { config } from './core/config.js';
import { logger } from './core/logger.js';
import { requestLogger, errorHandler } from './core/middleware.js';
import { swaggerSpec } from './config/swagger.js';
import healthRouter from './api/health.js';
import estoqueRouter from './api/estoque.js';

const app = express();

// Middlewares globais
app.use(express.json());
app.use(requestLogger);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'Elfa Backend API Docs',
}));

// Swagger JSON
app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Rotas
app.use('/health', healthRouter);
app.use('/estoque', estoqueRouter);

// Error handler
app.use(errorHandler);

// Inicialização
const PORT = config.port;
app.listen(PORT, () => {
  logger.info(`🚀 ${config.appName} rodando na porta ${PORT}`);
  logger.info(`📊 Ambiente: ${config.env}`);
  logger.info(`📚 Swagger UI: http://localhost:${PORT}/api-docs`);
});

export default app;
