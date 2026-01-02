import db from "../config/db.js";

/* ============================
   CREATE contact message
   POST /api/contact
============================ */
export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email, and message are required",
      });
    }

    const query = `
      INSERT INTO contacts (name, email, message)
      VALUES ($1, $2, $3)
      RETURNING *
    `;

    const { rows } = await db.query(query, [
      name,
      email,
      message,
    ]);

    res.status(201).json({
      message: "Message sent successfully",
      contact: rows[0],
    });
  } catch (err) {
    console.error("Create contact error:", err);
    res.status(500).json({ message: "Failed to send message" });
  }
};
