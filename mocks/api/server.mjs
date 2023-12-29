import { setTimeout as sleep } from 'node:timers/promises';
import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({
  logger: true,
});

fastify.get('/ping', (_, reply) => {
  reply.send('pong');
});

fastify.post('/api/registration/validate', async function handler(req, reply) {
  await sleep(1000);
  if (req.body.data.email === 'busy.email@example.com') {
    reply.code(400).send({ message: 'Email is busy' });
  } else {
    reply.code(200).send({ status: 'ok' });
  }
});

try {
  await fastify.register(cors, { origin: true });
  const address = await fastify.listen({ port: 4000, host: '127.0.0.1' });
  console.log(`Server listening on ${address}`);
} catch (err) {
  console.error(err);
  process.exit(1);
}
