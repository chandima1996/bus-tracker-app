import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import routeRoutes from "./routes/routeRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use("/api/routes", routeRoutes);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
