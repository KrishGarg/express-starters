import express from "express";

import * as controllers from "./controllers";

const app = express();
const PORT = process.env.PORT ?? 3000;
const inProd = process.env.NODE_ENV === "production";

const inDetaProd = process.env.DETA_RUNTIME;

// Registering controllers.
Object.values(controllers).forEach(({ route, router }) => {
  app.use(route, router);
});

app.get("/", (req, res) => {
  return res.send("Hello World");
});

// It wouldn't work if you start to listen in Deta.
if (!inDetaProd) {
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
}

// Deta instead asks for this.
export = app;
