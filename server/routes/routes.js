import express from "express";
import { contact } from "../controllers/emailController.js";
import limiter from "../middleware/rateLimiter.js";
const router = express.Router();

router.post("/contact", limiter, contact);

export default router;
