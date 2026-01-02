import db from "../config/db.js";

/* ===========================
   GET all trips (for user)
   GET /api/trips
=========================== */
export const getAllTrips = async (req, res) => {
  try {
    // TEMP: fixed logged-in user
    const userId = 1;

    const query = `
      SELECT 
        t.id,
        t.start_date,
        t.end_date,
        t.created_at,
        d.id AS destination_id,
        d.name AS destination_name,
        d.city_image
      FROM trips t
      JOIN destinations d ON d.id = t.destination_id
      WHERE t.user_id = $1
      ORDER BY t.created_at DESC
    `;

    const { rows } = await db.query(query, [userId]);
    res.json(rows);
  } catch (err) {
    console.error("Get trips error:", err);
    res.status(500).json({ message: "Failed to fetch trips" });
  }
};

/* ===========================
   CREATE new trip
   POST /api/trips
=========================== */
export const createTrip = async (req, res) => {
  try {
    const { destination_id, start_date, end_date } = req.body;

    const destinationId = parseInt(destination_id, 10);

    if (!destinationId || !start_date || !end_date) {
      return res.status(400).json({
        message: "destination_id, start_date, and end_date are required",
      });
    }

    // TEMP: fixed logged-in user
    const userId = 1;

    const query = `
      INSERT INTO trips (user_id, destination_id, start_date, end_date)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;

    const { rows } = await db.query(query, [
      userId,
      destinationId,
      start_date,
      end_date,
    ]);

    res.status(201).json(rows[0]);
  } catch (err) {
    console.error("Create trip error:", err);
    res.status(500).json({ message: "Error creating trip" });
  }
};

/* ===========================
   DELETE trip
   DELETE /api/trips/:id
=========================== */
export const deleteTrip = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (!id) {
      return res.status(400).json({ message: "Invalid trip id" });
    }

    const query = `
      DELETE FROM trips
      WHERE id = $1 AND user_id = $2
    `;

    const result = await db.query(query, [id, 1]); // user_id = 1 (TEMP)

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Trip not found" });
    }

    res.json({ message: "Trip deleted successfully" });
  } catch (err) {
    console.error("Delete trip error:", err);
    res.status(500).json({ message: "Error deleting trip" });
  }
};
