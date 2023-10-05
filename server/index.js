import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.js";
import cors from "cors";

dotenv.config();

const app = express();

const port = 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use("/user", userRoutes);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established succesfully!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
