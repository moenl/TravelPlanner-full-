import express from "express";
import {
  getAllTrips,
  createTrip,
  deleteTrip
} from "../controllers/trips.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", requireAuth, getAllTrips);
router.post("/", requireAuth, createTrip);
router.delete("/:id", requireAuth, deleteTrip);

export default router;
