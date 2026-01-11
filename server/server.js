import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";

const app = express();
const port = process.env.PORT || 3000;

await connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.use("/api/user", userRouter);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
