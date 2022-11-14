import { RegisterRoutes } from "../routes/routes";
import swaggerUi from "swagger-ui-express";

require('dotenv').config()

const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "swagger/swagger.json",
    },
  })
);

RegisterRoutes(app);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Carpark backend app listening at http://localhost:${port}`)
);
