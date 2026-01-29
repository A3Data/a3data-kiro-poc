import dotenv from 'dotenv';

dotenv.config();

export const config = {
  appName: process.env.APP_NAME || 'nodejs-agents',
  env: process.env.APP_ENV || 'local',
  port: parseInt(process.env.APP_PORT || '3000', 10),
  debug: process.env.APP_DEBUG === 'true',
  logLevel: process.env.LOG_LEVEL || 'info',
  
  llm: {
    provider: process.env.LLM_PROVIDER || 'bedrock',
    timeout: parseInt(process.env.LLM_TIMEOUT || '30', 10),
  }
};
