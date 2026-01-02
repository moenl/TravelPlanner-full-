import db from "../config/db.js";

/* ============================
   GET estimated costs by destination
   GET /api/costs/:destinationId
============================ */
export const getCostsByDestination = async (req, res) => {
  try {
    const destinationId = parseInt(req.params.destinationId, 10);

    if (!destinationId) {
      return res.status(400).json({
        message: "Invalid destination id",
      });
    }

    const query = `
      SELECT id, name, cost
      FROM estimated_costs
      WHERE destination_id = $1
      ORDER BY id
    `;

    const { rows } = await db.query(query, [destinationId]);
    res.json(rows);
  } catch (err) {
    console.error("Get estimated costs error:", err);
    res.status(500).json({
      message: "Failed to fetch estimated costs",
    });
  }
};

