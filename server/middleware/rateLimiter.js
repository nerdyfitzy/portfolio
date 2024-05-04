import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 60 * 5000,
  max: 1,
  message: "Too many requests",
});

export default limiter;
