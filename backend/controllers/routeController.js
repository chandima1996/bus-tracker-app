import Route from "../models/routeModel.js";

const createRoute = async (req, res) => {
  try {
    const { routeNumber, routeName, status } = req.body;

    const newRoute = await Route.create({
      routeNumber,
      routeName,
      status,
    });

    res.status(201).json(newRoute);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Invalid route data", error: error.message });
  }
};

const getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find({});

    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ message: "Server error:", error: error.message });
  }
};

export { createRoute, getAllRoutes };
