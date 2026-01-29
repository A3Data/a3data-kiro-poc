import { test } from 'node:test';
import assert from 'node:assert';

test('healthcheck básico', async () => {
  const response = {
    status: 'healthy',
    app: 'nodejs-agents',
    env: 'local'
  };
  
  assert.strictEqual(response.status, 'healthy');
  assert.ok(response.app);
});
