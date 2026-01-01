import db from "../config/db.js";

export const createContact = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = `
    INSERT INTO contacts (name, email, message)
    VALUES (?, ?, ?)
  `;

  db.query(query, [name, email, message], (err) => {
    if (err) {
      console.error("Contact insert error:", err);
      return res.status(500).json({ message: "Server error" });
    }

    res.json({ message: "Message sent successfully" });
  });
};
