import mongoose from "mongoose";

const routeSchema = mongoose.Schema(
  {
    routeNumber: {
      type: String,
      required: true,
      unique: true,
    },
    routeName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamp: true,
  }
);

const Route = mongoose.model("Route", routeSchema);

export default Route;
