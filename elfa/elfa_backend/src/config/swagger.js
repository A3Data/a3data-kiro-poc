import swaggerJsdoc from 'swagger-jsdoc';
import { config } from '../core/config.js';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Elfa Backend API',
      version: '1.0.0',
      description: 'API de backend para verificação de estoque e cotações',
      contact: {
        name: 'Equipe Elfa',
      },
    },
    servers: [
      {
        url: `http://localhost:${config.port}`,
        description: 'Servidor de desenvolvimento',
      },
      {
        url: 'https://api.elfa.com',
        description: 'Servidor de produção',
      },
    ],
    tags: [
      {
        name: 'Health',
        description: 'Endpoints de saúde da aplicação',
      },
      {
        name: 'Estoque',
        description: 'Endpoints de verificação de estoque',
      },
    ],
  },
  apis: ['./src/api/*.js'], // Caminho para os arquivos com anotações
};

export const swaggerSpec = swaggerJsdoc(options);
