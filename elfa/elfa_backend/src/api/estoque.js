import express from 'express';
import { logger } from '../core/logger.js';

const router = express.Router();

// Mock de dados de estoque
const estoqueDB = {
  'PROD-001': { sku: 'PROD-001', nome: 'Produto A', quantidade: 150, disponivel: true },
  'PROD-002': { sku: 'PROD-002', nome: 'Produto B', quantidade: 0, disponivel: false },
  'PROD-003': { sku: 'PROD-003', nome: 'Produto C', quantidade: 75, disponivel: true },
};

/**
 * @swagger
 * components:
 *   schemas:
 *     Estoque:
 *       type: object
 *       properties:
 *         sku:
 *           type: string
 *           description: Código SKU do produto
 *           example: PROD-001
 *         nome:
 *           type: string
 *           description: Nome do produto
 *           example: Produto A
 *         quantidade:
 *           type: integer
 *           description: Quantidade disponível em estoque
 *           example: 150
 *         disponivel:
 *           type: boolean
 *           description: Indica se o produto está disponível
 *           example: true
 *     DisponibilidadeRequest:
 *       type: object
 *       required:
 *         - sku
 *         - quantidadeSolicitada
 *       properties:
 *         sku:
 *           type: string
 *           description: Código SKU do produto
 *           example: PROD-001
 *         quantidadeSolicitada:
 *           type: integer
 *           description: Quantidade solicitada
 *           example: 10
 *     DisponibilidadeResponse:
 *       type: object
 *       properties:
 *         sku:
 *           type: string
 *           example: PROD-001
 *         disponivel:
 *           type: boolean
 *           example: true
 *         quantidadeDisponivel:
 *           type: integer
 *           example: 150
 *         quantidadeSolicitada:
 *           type: integer
 *           example: 10
 *         podeAtender:
 *           type: boolean
 *           example: true
 */

/**
 * @swagger
 * /estoque:
 *   get:
 *     summary: Lista todos os produtos em estoque
 *     tags: [Estoque]
 *     description: Retorna a lista completa de produtos com suas quantidades
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *                   example: 3
 *                 produtos:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Estoque'
 */
router.get('/', (req, res) => {
  const produtos = Object.values(estoqueDB);
  
  logger.info('Listando todos os produtos', { total: produtos.length });
  
  res.json({
    total: produtos.length,
    produtos
  });
});

/**
 * @swagger
 * /estoque/{sku}:
 *   get:
 *     summary: Consulta estoque de um produto específico
 *     tags: [Estoque]
 *     description: Retorna informações de estoque de um produto pelo SKU
 *     parameters:
 *       - in: path
 *         name: sku
 *         required: true
 *         schema:
 *           type: string
 *         description: Código SKU do produto
 *         example: PROD-001
 *     responses:
 *       200:
 *         description: Informações do produto retornadas com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Estoque'
 *       404:
 *         description: Produto não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Produto não encontrado
 */
router.get('/:sku', (req, res) => {
  const { sku } = req.params;
  const produto = estoqueDB[sku];
  
  if (!produto) {
    logger.warn('Produto não encontrado', { sku });
    return res.status(404).json({ error: 'Produto não encontrado' });
  }
  
  logger.info('Produto consultado', { sku });
  res.json(produto);
});

/**
 * @swagger
 * /estoque/verificar-disponibilidade:
 *   post:
 *     summary: Verifica disponibilidade de produto para cotação
 *     tags: [Estoque]
 *     description: Verifica se há estoque suficiente para atender uma solicitação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DisponibilidadeRequest'
 *     responses:
 *       200:
 *         description: Verificação realizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DisponibilidadeResponse'
 *       400:
 *         description: Requisição inválida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: SKU e quantidade são obrigatórios
 *       404:
 *         description: Produto não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Produto não encontrado
 */
router.post('/verificar-disponibilidade', (req, res) => {
  const { sku, quantidadeSolicitada } = req.body;
  
  if (!sku || !quantidadeSolicitada) {
    return res.status(400).json({ error: 'SKU e quantidade são obrigatórios' });
  }
  
  const produto = estoqueDB[sku];
  
  if (!produto) {
    logger.warn('Produto não encontrado para verificação', { sku });
    return res.status(404).json({ error: 'Produto não encontrado' });
  }
  
  const podeAtender = produto.disponivel && produto.quantidade >= quantidadeSolicitada;
  
  logger.info('Disponibilidade verificada', {
    sku,
    quantidadeSolicitada,
    podeAtender
  });
  
  res.json({
    sku,
    disponivel: produto.disponivel,
    quantidadeDisponivel: produto.quantidade,
    quantidadeSolicitada,
    podeAtender
  });
});

export default router;