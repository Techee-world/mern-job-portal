import mongoose from "mongoose";

const userFavoriteDataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Add required if needed
  },
  name: {
    type: String,
    required: true, // Add required if needed
  },
  location: {
    type: String,
    required: true, // Add required if needed
  },
  type: {
    type: [String], // Array of strings
    required: true, // Add required if needed
  },
  salary: {
    type: String,
    required: true, // Add required if needed
  },
});

const FavoriteData = mongoose.model("UserFavorite", userFavoriteDataSchema);
export default FavoriteData;
