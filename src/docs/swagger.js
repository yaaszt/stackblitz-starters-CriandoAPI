import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gov Data API (BrasilAPI Proxy)',
      version: '1.0.0',
      description:
        'API pública criada em aula consumindo dados do governo/serviços públicos via BrasilAPI.',
    },
  },
  apis: ['./src/routes/*.js'],
});
