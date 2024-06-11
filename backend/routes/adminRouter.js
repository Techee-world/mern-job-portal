import express from "express";
import {
  adminJobApplicationList,
  adminJobApplicationForm,
} from "../controllers/adminControllers.js";

const router = express.Router();

router.post("/adminJobApplication", adminJobApplicationForm);
router.get("/adminJobApplication", adminJobApplicationList);


export default router;
