import express from "express";
import  dotenv from "dotenv";
import connectToDB from "./config/db.js";
import route from './routes/route.js'
import adminRouter from './routes/adminRouter.js'
import bodyParser from "body-parser";
import cors from 'cors'

dotenv.config();

const app = express();

// mongodb connecting 
connectToDB();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", route);
app.use("/api/admin", adminRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server is running ${PORT} port`))