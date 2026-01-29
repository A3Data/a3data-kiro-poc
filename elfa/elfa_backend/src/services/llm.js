import { logger } from '../core/logger.js';
import { config } from '../core/config.js';

export class LLMClient {
  constructor(provider = config.llm.provider) {
    this.provider = provider;
    this.timeout = config.llm.timeout * 1000;
  }

  async invoke(prompt, options = {}) {
    logger.info('LLM invocation', { provider: this.provider, prompt });
    
    // Implementação específica do provider deve ser adicionada aqui
    throw new Error(`Provider ${this.provider} não implementado`);
  }

  async stream(prompt, options = {}) {
    logger.info('LLM streaming', { provider: this.provider });
    
    // Implementação de streaming deve ser adicionada aqui
    throw new Error('Streaming não implementado');
  }
}
