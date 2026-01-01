import db from "../config/db.js";

export const getCostsByDestination = (req, res) => {
  const { destinationId } = req.params;

  const query = "SELECT * FROM estimated_costs WHERE destination_id = ?";

  db.query(query, [destinationId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};


