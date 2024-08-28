import express from "express";
import cors from "cors";
import { ConnectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

ConnectDB();

app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads'))

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
