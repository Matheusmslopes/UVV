/** @type{import('fastify).FastifyPluginAsync<>}*/
import createError from '@fastify/error';


export default async function products(app, options){
    const MyCustomError = createError('MyCustomError', 'Invalid product.', 400);
    const products = [
        {id: 1, name: 'Tomate', qtd: 20},
        {id: 2, name: 'Cebola', qtd: 50}
    ]
    
    app.get('/products', async (request, reply) => {
        return products;
    });
    
    app.post('/products', {
        schema: {
            type: 'object',
            properties: {
                id: {type: 'integer'},
                name: {type: 'string'},
                qtd: {type : 'integer'}
            },
            required: ['name', 'qtd']
        }
    }, async (request, reply) => {
        let product = request.body;
        request.log.info(`Including products ${product.name}.`);
        return product;
    });
    
    app.get('/products/:id', async (request, reply) => {
        app.log.info('Produto requisitado> ' + request.params.id);
        return {};
    });
    
    app.delete('/products/:id', async (request, reply) => {
        app.log.info('Produto para remover> ' + request.params.id);
        return {};
    });
}