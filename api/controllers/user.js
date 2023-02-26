import bcrypt from "bcryptjs";
import { response } from "express";
import jwt from "jsonwebtoken";
import UserSchema from "../models/userModel.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId();

export function register(req, res) {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const nameToUpperCase = req.body.name;
    const user = new UserSchema({
      name: nameToUpperCase.charAt(0).toUpperCase() + nameToUpperCase.slice(1),
      email: req.body.email,
      password: hash,
    });
    user
      .save()
      .then((response) => {
        res.status(200).json({
          response: "User was created successfully",
          user: response,
        });
      })
      .catch((err) => {
        console.log("err", err);
        res.status(400).json({ response: "Validation unsuccessful" });
      });
  });
}
async function login(req, res) {
  try {
    const user = await UserSchema.findOne({ email: req.body.email });

    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    console.log(user);

    if (isPasswordMatch) {
      const token = jwt.sign(
        {
          email: user.email,
          userId: user._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
        { algorythm: "RS256" }
      );

      return res.status(200).json({
        status: "login successfull",
        jwt_token: token,
      });
    }
  } catch (err) {
    console.log("err", err);
    return res.status(401).json({
      status: "Login failed. Please enter valid email and/or password.",
    });
  }
}
export { login };
