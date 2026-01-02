import db from "../config/db.js";

// GET all destinations
export const getAllDestinations = async (req, res) => {
  try {
    const {rows} = await db.query("SELECT * FROM destinations");
    res.json(rows);
  } catch (err) {
    console.error("getAllDestinations error:", err);
    res.status(500).json({
      message: "Database error",
      sqlMessage: err.message,
      code: err.code,
    });
  }
}; // ✅ THIS WAS MISSING

// GET one destination by id
export const getDestinationById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query(
      "SELECT * FROM destinations WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error("getDestinationById error:", err);
    res.status(500).json({
      message: "Database error",
      sqlMessage: err.message,
      code: err.code,
    });
  }
};

// GET destination + activities + costs
export const getDestinationFull = async (req, res) => {
  try {
    const { id } = req.params;

    const [destinationRows] = await db.query(
      "SELECT * FROM destinations WHERE id = ?",
      [id]
    );

    if (destinationRows.length === 0) {
      return res.status(404).json({ message: "Destination not found" });
    }

    const [activities] = await db.query(
      "SELECT * FROM activities WHERE destination_id = ?",
      [id]
    );

    const [costs] = await db.query(
      "SELECT * FROM estimated_costs WHERE destination_id = ?",
      [id]
    );

    res.json({
      destination: destinationRows[0],
      activities,
      costs,
    });
  } catch (err) {
    console.error("getDestinationFull error:", err);
    res.status(500).json({
      message: "Database error",
      sqlMessage: err.message,
      code: err.code,
    });
  }
};
