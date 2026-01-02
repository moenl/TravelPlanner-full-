import db from "../config/db.js";

/* ============================
   GET user budget
   GET /api/budget?user_id=1
============================ */
export const getUserBudget = async (req, res) => {
  try {
    const userId = parseInt(req.query.user_id, 10);

    if (!userId) {
      return res.status(400).json({ message: "user_id is required" });
    }

    const query = `
      SELECT id, category, amount, trip_id, created_at
      FROM budget
      WHERE user_id = $1
      ORDER BY created_at DESC
    `;

    const { rows } = await db.query(query, [userId]);
    res.json(rows);
  } catch (err) {
    console.error("Get budget error:", err);
    res.status(500).json({ message: "Failed to fetch budget" });
  }
};

/* ============================
   ADD budget item
   POST /api/budget
============================ */
export const addBudgetItem = async (req, res) => {
  try {
    const { user_id, trip_id, category, amount } = req.body;

    const userId = parseInt(user_id, 10);
    const tripId = trip_id ? parseInt(trip_id, 10) : null;

    if (!userId || !category || amount === undefined) {
      return res.status(400).json({
        message: "user_id, category and amount are required",
      });
    }

    const query = `
      INSERT INTO budget (user_id, trip_id, category, amount)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;

    const { rows } = await db.query(query, [
      userId,
      tripId,
      category,
      amount,
    ]);

    res.status(201).json(rows[0]);
  } catch (err) {
    console.error("Add budget error:", err);
    res.status(500).json({ message: "Failed to add budget item" });
  }
};

/* ============================
   DELETE budget item
   DELETE /api/budget/:id
============================ */
export const deleteBudgetItem = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (!id) {
      return res.status(400).json({ message: "Invalid budget id" });
    }

    const result = await db.query(
      "DELETE FROM budget WHERE id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Budget item not found" });
    }

    res.json({ message: "Budget item deleted successfully" });
  } catch (err) {
    console.error("Delete budget error:", err);
    res.status(500).json({ message: "Failed to delete budget item" });
  }
};
