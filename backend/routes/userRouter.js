import express from "express";
import {addToFavoriteData } from '../controllers/userControllers.js'

const router = express.Router();

router.post("/userFavorite", addToFavoriteData);

export default router;
