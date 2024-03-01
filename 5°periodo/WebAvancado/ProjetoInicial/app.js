import fastify from 'fastify';
import createError from '@fastify/error';
import fastifyStatic from '@fastify/static';
import spa from './routes/spa.js';
import products from './routes/products.js';

const MyCustomError = createError('MyCUstomError', 'Something stranged happened.', 501);

export async function build(opts){
    const app = fastify(opts);

    app.register(fastifyStatic, {
        root: `${import.meta.dirname}/public`,
        wildcard: false
    });

    app.register(spa);
    app.register(products);

   
    app.get('/error', (req, rep) => {
        throw new MyCustomError;
    });

    app.setErrorHandler(async (error, req, rep) => {
        const {validation} = error;
        req.log.error({error});
        rep.code(error.statusCode || 500);

        return validation ? `Validation Error: ${validation[0].message}` : 'Internal Server Error' 
    });

    app.setNotFoundHandler(async (req, rep) => {
        reply.code(404);

        return 'Resource not found';
    });

    return app;
}