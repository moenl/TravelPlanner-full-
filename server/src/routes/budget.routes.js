import express from "express";
import {
  getUserBudget,
  addBudgetItem,
  deleteBudgetItem
} from "../controllers/budget.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", requireAuth, getUserBudget);
router.post("/", requireAuth, addBudgetItem);
router.delete("/:id", requireAuth, deleteBudgetItem);

export default router;
