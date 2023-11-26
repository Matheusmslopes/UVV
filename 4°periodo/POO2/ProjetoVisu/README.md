## Utilizado:

- Typescript
- Prisma
- Express

# Preparando o ambiente

Siga os seguintes passos para inicializar o trabalho

```npm init -y```

## Instalar o Typescript

```npm install typescript ts-node @types/node --save-dev```

## Inicializar e Configurar o Typescript

```npx tsc --init```

## Formato do tsconfig.json recomendado:

```{
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## Instalando o Prisma (ORM):

```npm install prisma --save-dev```

```npx prisma init --datasource-provider sqlite```

## Como compilar o projeto

```npx tsc``` - Transforma typscript -> javascript :

```node ./dist/nome.js``` - roda o código que anteriormente foi passado para javascript.

## Migrando para ter o Database

```npx prisma migrate dev --name init```

## Instalando Express

```npm install express```

```npm install --save-dev @types/express```

## Instalando ejs

```npm install ejs```

## Instalando o ts-node-dev

```npm install ts-node-dev --save-dev```


