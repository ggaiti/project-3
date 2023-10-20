import express from "express";
import { register, login, logout } from "../controllers/user.js";

const userRoutes = express.Router();

userRoutes.delete("/logout", logout);
userRoutes.post("/register", register);
userRoutes.post("/login", login);
// userRoutes.get("/hi", fakeRequest);
export default userRoutes;
