import express from "express";
import { register, login } from "../controllers/user.js";

const userRoutes = express.Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);
// userRoutes.get("/hi", fakeRequest);
export default userRoutes;
