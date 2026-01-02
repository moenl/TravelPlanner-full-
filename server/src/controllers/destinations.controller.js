import db from "../config/db.js";

/* ============================
   GET all destinations
   GET /api/destinations
============================ */
export const getAllDestinations = async (req, res) => {
  try {
    const query = `
      SELECT id, name, country, image, city_image, description, price
      FROM destinations
      ORDER BY id
    `;

    const { rows } = await db.query(query);
    res.json(rows);
  } catch (err) {
    console.error("getAllDestinations error:", err);
    res.status(500).json({
      message: "Failed to fetch destinations",
    });
  }
};

/* ============================
   GET one destination by id
   GET /api/destinations/:id
============================ */
export const getDestinationById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (!id) {
      return res.status(400).json({ message: "Invalid destination id" });
    }

    const query = `
      SELECT id, name, country, image, city_image, description, price
      FROM destinations
      WHERE id = $1
    `;

    const { rows } = await db.query(query, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error("getDestinationById error:", err);
    res.status(500).json({
      message: "Failed to fetch destination",
    });
  }
};

/* ============================
   GET destination + activities + costs
   GET /api/destinations/:id/full
============================ */
export const getDestinationFull = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (!id) {
      return res.status(400).json({ message: "Invalid destination id" });
    }

    // Destination
    const destinationQuery = `
      SELECT id, name, country, image, city_image, description, price
      FROM destinations
      WHERE id = $1
    `;

    const { rows: destinationRows } = await db.query(destinationQuery, [id]);

    if (destinationRows.length === 0) {
      return res.status(404).json({ message: "Destination not found" });
    }

    // Activities
    const activitiesQuery = `
      SELECT id, title, image, description, location_query
      FROM activities
      WHERE destination_id = $1
      ORDER BY id
    `;

    const { rows: activities } = await db.query(activitiesQuery, [id]);

    // Estimated costs
    const costsQuery = `
      SELECT id, name, cost
      FROM estimated_costs
      WHERE destination_id = $1
      ORDER BY id
    `;

    const { rows: costs } = await db.query(costsQuery, [id]);

    res.json({
      destination: destinationRows[0],
      activities,
      costs,
    });
  } catch (err) {
    console.error("getDestinationFull error:", err);
    res.status(500).json({
      message: "Failed to fetch destination data",
    });
  }
};
