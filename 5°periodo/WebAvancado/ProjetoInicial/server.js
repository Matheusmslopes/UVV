import { build } from './app.js';
import dotenv from 'dotenv';
import closeWithGrace from 'close-with-grace';

dotenv.config();

const opts = {logger: true}

const app = await build(opts);

const port = process.env.PORT || '3000';
const host = process.env.HOST || '127.0.0.1';

await app.listen({port, host});

closeWithGrace(async ({signal, error}) =>{
    if (error)
        app.log.error(`Server Close due to an error: ${error.message}`);
    else
        app.log.info(`${signal} signal received. Shutting down gracefully`);
});