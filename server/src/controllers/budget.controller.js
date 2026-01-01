import db from "../config/db.js";

// GET user budget
export const getUserBudget = (req, res) => {
  const userId = req.query.user_id;

  const query = `
    SELECT id, category, amount, trip_id
    FROM budget
    WHERE user_id = ?
    ORDER BY created_at DESC
  `;

  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// ADD budget item
export const addBudgetItem = (req, res) => {
  const { user_id, trip_id, category, amount } = req.body;

  const query = `
    INSERT INTO budget (user_id, trip_id, category, amount)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [user_id, trip_id, category, amount], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Budget item added" });
  });
};

// DELETE budget item
export const deleteBudgetItem = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM budget WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Budget item deleted" });
  });
};
