import express, { application } from "express";
import User from "../models/user.model.js";
import id from "mongodb";
import argon2 from "argon2";

const { ObjectId } = id;
const userRoutes = express.Router();

export const login = async (req, res) => {
  try {
    const query = User.where({ username: req.body.username });
    const foundUser = await query.findOne();
    if (foundUser === null) {
      return res.status(401).json({
        error: {
          name: "username",
          message: "user not found",
        },
      });
    }
    if (req.body.password !== foundUser.password) {
      return res.status(401).json({
        error: {
          name: "password",
          message: "password not found",
        },
      });
    }
    res.status(200).json(foundUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const query = User.where({ username: req.body.username });
    const foundUser = await query.findOne();
    if (foundUser !== null) {
      return res.status(401).json({
        error: {
          name: "username",
          message: "Username already exist",
        },
      });
    }
    const user = await User.create(req.body);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//logout
export const logout = async (req, res) => {
  console.log("logging out");
  try {
    req.session.destroy((err) => {
      return res.send("OK");
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const fakeRequest = async (req, res) => {
//   try {
//     res.send("hello world");
//   } catch (error) {
//     console.log(error);
//   }
// };
