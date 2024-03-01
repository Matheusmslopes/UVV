/** @type{import('fastify).FastifyPluginAsync<>}*/

export default async function spa(app, options){
    app.get('/*', async (request, reply) => {
        request.log.info({params: request.params}, 'Hello from wildcard');
        return reply.sendFile('index.html');
    });
}