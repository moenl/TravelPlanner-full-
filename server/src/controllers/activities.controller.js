import db from "../config/db.js";

/* ===========================
   GET activities by destination
=========================== */
export const getActivitiesByDestination = async (req, res) => {
  try {
    const { destinationId } = req.params;

    const query = `
      SELECT *
      FROM activities
      WHERE destination_id = $1
    `;

    const { rows } = await db.query(query, [destinationId]);
    res.json(rows);
  } catch (err) {
    console.error("Get activities error:", err);
    res.status(500).json({ message: "Failed to fetch activities" });
  }
};

