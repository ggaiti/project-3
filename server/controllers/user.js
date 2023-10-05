import express, { application } from "express";
import User from "../models/user.model.js";
import id from "mongodb";
import argon2 from "argon2";

const { ObjectId } = id;
const userRoutes = express.Router();

export const loggedIn = async (req, res) => {
  res.status(200).json("LOGGED IN");
};

export const register = async (req, res) => {
  try {
    const { username } = req.body;
    const query = User.where({ username: username });

    const foundUser = await query.findOne();
    if (foundUser !== null)
      return res.status(401).json({
        errror: {
          name: "username",
          message: "Username already exist.",
        },
      });

    const newUser = { ...req.body };
    const hashedPassword = await argon2.hash(req.body.password);
    newUser.password = hashedPassword;

    const user = await User.create(newUser);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const fakeRequest = async (req, res) => {
  try {
    res.send("hello world");
  } catch (error) {
    console.log(error);
  }
};
