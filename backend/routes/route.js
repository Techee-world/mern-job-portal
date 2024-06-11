import express from "express";
import { login, registerForm } from "../controllers/authControlles.js";

const router = express.Router();

router.post("/register", registerForm);
router.post("/login", login);


export default router;
