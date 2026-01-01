import express from "express";
import { getActivitiesByDestination } from "../controllers/activities.controller.js";

const router = express.Router();

// GET /api/activities/:destinationId
router.get("/:destinationId", getActivitiesByDestination);

export default router;

