import express from "express";
import testRoutes from "./routes/testRoutes.js";

const app = express();

app.use("/", testRoutes);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
