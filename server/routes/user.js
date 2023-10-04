import express from "express";
import { fakeRequest, register } from "../controllers/user.js";

const userRoutes = express.Router();

userRoutes.post("/register", register);
userRoutes.get("/hi", fakeRequest);
export default userRoutes;
