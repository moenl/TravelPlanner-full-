import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import destinationsRoutes from "./routes/destinations.routes.js";
import activitiesRoutes from "./routes/activities.routes.js";
import costsRoutes from "./routes/costs.routes.js";
import tripsRoutes from "./routes/trips.routes.js"; // ✅ ADD THIS

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/destinations", destinationsRoutes);
app.use("/api/activities", activitiesRoutes);
app.use("/api/costs", costsRoutes);
app.use("/api/trips", tripsRoutes); // ✅ ADD THIS

export default app;
