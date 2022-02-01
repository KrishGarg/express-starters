import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Example Response.");
});

export default {
  route: "/example",
  router,
};
