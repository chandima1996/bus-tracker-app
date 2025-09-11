import express from "express";
import {
  createRoute,
  getAllRoutes,
  getRouteById,
  updateRoute,
  deleteRoute,
} from "../controllers/routeController.js";

const router = express.Router();

router.route("/").post(createRoute).get(getAllRoutes);

router.route("/:id").put(updateRoute).delete(deleteRoute).get(getRouteById);

export default router;
