import express from "express";
import { createRoute, getAllRoutes } from "../controllers/routeController.js";

const router = express.Router();

router.route("/").post(createRoute).get(getAllRoutes);

export default router;
