#!/usr/bin/env node

// Verificar memória disponível
const os = require('os');
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const usedMemory = totalMemory - freeMemory;
const memoryUsagePercent = (usedMemory / totalMemory) * 100;

console.log(`Memory Usage: ${memoryUsagePercent.toFixed(2)}%`);

// Verificar variáveis de ambiente críticas
const requiredEnvVars = ['NODE_ENV', 'GODADDY_EMAIL', 'GODADDY_PASS'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('Error: Missing required environment variables:', missingVars);
  process.exit(1);
}

// Iniciar a aplicação
require('./index.js');
