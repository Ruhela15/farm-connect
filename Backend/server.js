import express from "express";
import cors from "cors";
import { ConnectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import cartRouter from "./routes/cartRoute.js";
import { placeOrder } from "./controllers/orderController.js";
import orderRouter from "./routes/orderRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

ConnectDB();

app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});