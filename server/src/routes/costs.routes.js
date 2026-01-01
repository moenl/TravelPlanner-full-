import express from "express";
import { getCostsByDestination } from "../controllers/costs.controller.js";

const router = express.Router();

// GET /api/costs/:destinationId
router.get("/:destinationId", getCostsByDestination);

export default router;
