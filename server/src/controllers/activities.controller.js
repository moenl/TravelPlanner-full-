import db from "../config/db.js";

export const getActivitiesByDestination = (req, res) => {
  const { destinationId } = req.params;

  const query = "SELECT * FROM activities WHERE destination_id = ?";

  db.query(query, [destinationId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};
