import db from "../config/db.js";

/* ===========================
   GET all trips
=========================== */
export const getAllTrips = async (req, res) => {
  try {
    const query = `
      SELECT 
        trips.id,
        destinations.name AS destination,
        trips.start_date,
        trips.end_date
      FROM trips
      JOIN destinations ON trips.destination_id = destinations.id
      ORDER BY trips.created_at DESC
    `;

    const { rows } = await db.query(query);
    res.json(rows);
  } catch (err) {
    console.error("Get trips error:", err);
    res.status(500).json({ message: "Failed to fetch trips" });
  }
};

/* ===========================
   CREATE new trip
=========================== */
export const createTrip = async (req, res) => {
  try {
    const { destination_id, start_date, end_date } = req.body;

    if (!destination_id || !start_date || !end_date) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // TEMP: fixed logged-in user
    const user_id = 1;

    const query = `
      INSERT INTO trips (destination_id, start_date, end_date, user_id)
      VALUES ($1, $2, $3, $4)
    `;

    await db.query(query, [
      destination_id,
      start_date,
      end_date,
      user_id,
    ]);

    res.json({ message: "Trip created successfully" });
  } catch (err) {
    console.error("Create trip error:", err);
    res.status(500).json({ message: "Error creating trip" });
  }
};

/* ===========================
   DELETE trip
=========================== */
export const deleteTrip = async (req, res) => {
  try {
    const { id } = req.params;

    const query = "DELETE FROM trips WHERE id = $1";
    const result = await db.query(query, [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Trip not found" });
    }

    res.json({ message: "Trip deleted successfully" });
  } catch (err) {
    console.error("Delete trip error:", err);
    res.status(500).json({ message: "Error deleting trip" });
  }
};
