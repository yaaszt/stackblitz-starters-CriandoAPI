import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import routes from './routes/index.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger.js';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({
    name: 'gov-data-api',
    status: 'ok',
    endpoints: ['/api/v1/feriados/:ano', '/api/v1/bancos', '/docs'],
  });
});

app.use('/api/v1', routes);

// Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Erros por último
app.use(errorMiddleware);
