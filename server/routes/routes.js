import express from "express";
import { contact } from "../controllers/emailController.js";
import limiter from "../middleware/rateLimiter.js";
import { environment } from "../../env.js";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

if (environment === "production") {
  const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const __dirname = path.dirname(__filename); // get the name of the directory
  router.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
  });
}

router.post("/contact", limiter, contact);

export default router;
