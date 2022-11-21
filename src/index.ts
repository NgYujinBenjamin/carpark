import swaggerUi from 'swagger-ui-express';
import express, {Application} from 'express';
import log from 'npmlog';
import {RegisterRoutes} from '../routes/routes';

const app: Application = express();

app.use(express.static('public'));
app.use(express.json());

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json',
    },
  }),
);

RegisterRoutes(app);

const port = process.env.PORT || 5000;

app.listen(port, () => log.info(`Main`, `Carpark backend app listening at http://localhost:${port}`));
