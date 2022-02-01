import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send("The model was get-ted");
});

export default {
  route: "/example",
  router,
};
