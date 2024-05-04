import express from "express";
import { contact } from "../controllers/emailController.js";
import limiter from "../middleware/rateLimiter.js";
import { environment } from "../../env.js";

const router = express.Router();

if (environment == "production") {
  router.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
  });
}

router.get("/");

router.post("/contact", limiter, contact);

export default router;
