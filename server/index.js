import express, { json } from "express";
import cors from "cors";
import { PORT, environment } from "../env.js";
import router from "./routes/routes.js";
import { fileURLToPath } from "url";
import path from "path";

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

app.use("/v1", router);

app.listen(PORT, () => console.log("listening on", PORT));
