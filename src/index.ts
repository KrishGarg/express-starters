import express from "express";

import * as controllers from "./controllers";

const app = express();
const PORT = process.env.PORT ?? 3000;

// Registering controllers.
Object.values(controllers).forEach(({ route, router }) => {
  app.use(route, router);
});

app.get("/", (req, res) => {
  return res.send("Hello World");
});

if (process.env.NODE_ENV !== "testing") {
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
}

export default app;
