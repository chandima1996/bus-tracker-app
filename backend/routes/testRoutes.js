import express from "express";
import { getRootHandler } from "../controllers/testController.js";

const router = express.Router();

router.route("/").get(getRootHandler);

export default router;
