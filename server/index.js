import express, { json } from "express";
import cors from "cors";
import { port, environment } from "../env.js";

const app = express();
app.use(cors());
app.use(json());

if (environment == "production") {
  const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const __dirname = path.dirname(__filename); // get the name of the directory
  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
  });
}

app.get("/");

app.post("/contact", (req, res) => {
  console.log(req.body);
  const { email, message } = req.body;
  console.log(email, message);

  res.status(201);
  res.send({ email, message });
});

app.listen(port, () => console.log("listening on", port));
