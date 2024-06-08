import User from "../modules/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerForm = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = new User({ firstName, lastName, email, password });
    user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error ");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};
