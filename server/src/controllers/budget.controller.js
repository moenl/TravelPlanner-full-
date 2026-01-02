import db from "../config/db.js";

/* ============================
   GET user budget
============================ */
export const getUserBudget = async (req, res) => {
  try {
    const userId = req.query.user_id;

    if (!userId) {
      return res.status(400).json({ message: "user_id is required" });
    }

    const query = `
      SELECT id, category, amount, trip_id
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
============================ */
export const addBudgetItem = async (req, res) => {
  try {
    const { user_id, trip_id, category, amount } = req.body;

    if (!user_id || !category || !amount) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const query = `
      INSERT INTO budget (user_id, trip_id, category, amount)
      VALUES ($1, $2, $3, $4)
    `;

    await db.query(query, [
      user_id,
      trip_id || null,
      category,
      amount,
    ]);

    res.json({ message: "Budget item added" });
  } catch (err) {
    console.error("Add budget error:", err);
    res.status(500).json({ message: "Failed to add budget item" });
  }
};

/* ============================
   DELETE budget item
============================ */
export const deleteBudgetItem = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.query(
      "DELETE FROM budget WHERE id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Budget item not found" });
    }

    res.json({ message: "Budget item deleted" });
  } catch (err) {
    console.error("Delete budget error:", err);
    res.status(500).json({ message: "Failed to delete budget item" });
  }
};
