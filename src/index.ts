import swaggerUi from 'swagger-ui-express';
import express, {Application} from 'express';
import log from 'npmlog';
import {RegisterRoutes} from '../routes/routes';

const app: Application = express();

app.use(express.static('public'));
app.use(express.json());

// if (process.env.OPERATIONAL_ENV === 'dev'){
app.use((_req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `http://localhost:3000`);
  res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept, Authorization`);
  next();
});
// }

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
