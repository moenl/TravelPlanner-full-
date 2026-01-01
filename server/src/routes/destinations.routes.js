import express from "express";
import {
  getAllDestinations,
  getDestinationById,
  getDestinationFull,
} from "../controllers/destinations.controller.js";

const router = express.Router();

// GET all destinations
router.get("/", getAllDestinations);

// GET destination full details (destination + activities + costs)
router.get("/:id/full", getDestinationFull);

// GET one destination by id
router.get("/:id", getDestinationById);

export default router;
