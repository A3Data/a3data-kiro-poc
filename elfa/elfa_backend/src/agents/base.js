import { logger } from '../core/logger.js';

export class BaseAgent {
  constructor(name, config = {}) {
    this.name = name;
    this.config = config;
    this.context = {};
  }

  async execute(input) {
    logger.info(`Agent ${this.name} executando`, { input });
    throw new Error('Método execute() deve ser implementado');
  }

  setContext(key, value) {
    this.context[key] = value;
  }

  getContext(key) {
    return this.context[key];
  }

  clearContext() {
    this.context = {};
  }
}
