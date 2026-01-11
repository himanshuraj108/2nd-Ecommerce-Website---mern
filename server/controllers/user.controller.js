import bcrypt from "bcrypt";
import validator from "validator";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !email || !password) {
      return res.json({
        message: "Missing fields",
        success: false,
      });
    }

    if (password.length < 8) {
      return res.json({
        message: "Password must be atleast 8 characters",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.json({
        message: "User already exists",
        success: false,
      });
    }
    if (!validator.isEmail(email)) {
      return res.json({
        message: "Please enter a valid email address",
        success: false,
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });
    await newUser.save();

    return res.json({
      message: `Welcome ${firstName}`,
      success: true,
    });
  } catch (error) {
    return res.json({
      message: "Register API ERROR" + error.message,
      success: false,
    });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        message: "Missing fields",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        message: "User doesn't exists",
        success: false,
      });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.json({
        message: "Password is incorrect",
        success: false,
      });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.json({
      message: "Welcome Back",
      success: true,
      token,
    });
  } catch (error) {
    return res.json({
      message: "Register API ERROR" + error.message,
      success: false,
    });
  }
};
