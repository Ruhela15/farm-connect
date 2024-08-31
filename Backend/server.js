import express from "express";
import cors from "cors";
import { ConnectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
<<<<<<< Updated upstream
import userRouter from "./routes/userRoute.js";
import dotenv from 'dotenv'

dotenv.config();
=======
import cartRouter from "./routes/cartRoute.js";
>>>>>>> Stashed changes

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

ConnectDB();

app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads'))
<<<<<<< Updated upstream
app.use("/api/user",userRouter)
=======
app.use("/api/cart",cartRouter)
>>>>>>> Stashed changes

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
