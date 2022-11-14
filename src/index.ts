import { RegisterRoutes } from "../routes/routes";
import swaggerUi from "swagger-ui-express";
import express, { Application } from "express";

const app: Application = express();

app.use(express.static('public'));
app.use(express.json());

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

RegisterRoutes(app);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Carpark backend app listening at http://localhost:${port}`)
);
