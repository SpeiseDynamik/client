import Fastify from 'fastify';
const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get('/', async function handler(request, reply) {
  return { hello: 'world' };
});

// Run the server!
try {
  const address = await fastify.listen({ port: 3000, host: '127.0.0.1' });
  console.log(`Server listening on ${address}`);
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
