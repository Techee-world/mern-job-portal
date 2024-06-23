import FavoriteData from "../modules/Favorite.js";

export const addToFavoriteData = async (req, res) => {
  try {
    const favoriteTotalData = req.body;
    console.log(favoriteTotalData, "/////");

    // Validate the request body
    const { title, name, location, type, salary } = favoriteTotalData;
    if (!title || !name || !location || !type || !salary) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const addFavoriteToDatabase = new FavoriteData(favoriteTotalData);
    console.log(addFavoriteToDatabase, "......");
    await addFavoriteToDatabase.save();
    res.status(200).json({ message: "Favorite added successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Failed to add favorite");
  }
};
