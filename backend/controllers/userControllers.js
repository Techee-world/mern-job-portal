import FavoriteData from "../modules/Favorite.js";

export const addToFavoriteData = async (req, res) => {
  try {
    const favoriteTotalData = req.body;
    const { title, name, location, type, salary } = favoriteTotalData;
    if (!title || !name || !location || !type || !salary) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const addFavoriteToDatabase = new FavoriteData(favoriteTotalData);
    await addFavoriteToDatabase.save();
    res.status(200).json({ message: "Favorite added successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Failed to add favorite");
  }
};

export const giveFavoriteDataInDatabase = async (req, res) => {
  try {
    const displayFavoriteData = await FavoriteData.find({}); 
    res.status(200).json(displayFavoriteData);
  } catch (error) {
    console.error("Error fetching job applications:", error);
    res.status(500).json({ error: "An error favorite give data." });
  }
};

export const removeFavoriteDataInDatabase = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteFavorite = await FavoriteData.findById(id);
    if (!deleteFavorite) {
      return res.status(404).json({ message: "Favorite not found" });
    }

    await deleteFavorite.deleteOne(); // Use remove() to delete the document
    res.status(200).json({ message: "Favorite removed successfully" });
    console.log(deleteFavorite, "....");
  } catch (error) {
    console.error("Error removing favorite data:", error);
    res.status(500).json({ error: "Failed to remove favorite data" });
  }
};