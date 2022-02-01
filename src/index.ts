import express from "express";

import * as controllers from "./controllers";

const app = express();
const PORT = process.env.PORT ?? 3000;
const inProd = process.env.NODE_ENV === "production";

// Registering controllers.
Object.values(controllers).forEach(({ route, router }) => {
  app.use(route, router);
});

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
