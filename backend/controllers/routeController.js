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

const getRouteById = async (req, res) => {
  try {
    const route = await Route.findById(req.params.id);
    if (route) {
      res.status(200).json(route);
    } else {
      res.status(404).json({ message: "Route not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error..." });
  }
};

const updateRoute = async (req, res) => {
  try {
    const updatedRoute = await Route.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedRoute) {
      return res.status(404).json({ message: "Route not found." });
    }
    res.status(200).json(updatedRoute);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteRoute = async (req, res) => {
  try {
    const route = await Route.findByIdAndDelete(req.params.id);
    if (route) {
      res.status(200).json({ message: "Route deleted" });
    } else {
      res.status(404).json({ message: "Route not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export { createRoute, getAllRoutes, updateRoute, deleteRoute, getRouteById };
