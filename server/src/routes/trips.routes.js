import express from "express";
import {
  getAllTrips,
  createTrip,
  deleteTrip
} from "../controllers/trips.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getAllTrips);
router.post("/", createTrip);
router.delete("/:id", deleteTrip);

export default router;
