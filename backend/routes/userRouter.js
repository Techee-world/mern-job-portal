import express from "express";
import {addToFavoriteData, giveFavoriteDataInDatabase } from '../controllers/userControllers.js'

const router = express.Router();

router.post("/userFavorite", addToFavoriteData);
router.get("/userFavorite", giveFavoriteDataInDatabase);

export default router;
