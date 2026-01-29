import { v4 as uuidv4 } from 'uuid';
import { logger } from './logger.js';

export function requestLogger(req, res, next) {
  const traceId = uuidv4();
  req.traceId = traceId;
  
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('Request completed', {
      traceId,
      method: req.method,
      path: req.path,
      status: res.statusCode,
      duration: `${duration}ms`
    });
  });
  
  next();
}

export function errorHandler(err, req, res, next) {
  logger.error('Request error', {
    traceId: req.traceId,
    error: err.message,
    stack: err.stack
  });
  
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal server error',
      traceId: req.traceId
    }
  });
}
