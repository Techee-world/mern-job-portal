import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("mongodb is connected");
    } catch (error) {
        console.error(error.message, "this is error");
        process.exit(1);
    };
}
export default connectToDB;