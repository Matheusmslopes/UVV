import { build } from './app.js';

const opts = {logger: true}

const app = await build(opts);

await app.listen({port: 3000});