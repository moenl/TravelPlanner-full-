import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "travel_user",
  password: "travel123",
  database: "travelplanner",
  port: 3307,
});

export default db;
