import express from "express";
import {addToFavoriteData, giveFavoriteDataInDatabase, removeFavoriteDataInDatabase } from '../controllers/userControllers.js'

const router = express.Router();

router.post("/userFavorite", addToFavoriteData);
router.get("/userFavorite", giveFavoriteDataInDatabase);
router.delete("/userFavorite/:id", removeFavoriteDataInDatabase);

export default router;
