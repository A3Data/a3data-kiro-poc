import { config } from './config.js';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3
};

const currentLevel = levels[config.logLevel] || levels.info;

function log(level, message, meta = {}) {
  if (levels[level] > currentLevel) return;
  
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level: level.toUpperCase(),
    message,
    ...meta
  };
  
  console.log(JSON.stringify(logEntry));
}

export const logger = {
  error: (message, meta) => log('error', message, meta),
  warn: (message, meta) => log('warn', message, meta),
  info: (message, meta) => log('info', message, meta),
  debug: (message, meta) => log('debug', message, meta)
};
