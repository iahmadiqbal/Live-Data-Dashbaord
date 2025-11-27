import pool from "./lib/db.js";

async function testConnection() {
  try {
    const res = await pool.query("SELECT NOW()"); // test query
    console.log("Database connected! Current time:", res.rows[0]);
    process.exit();
  } catch (err) {
    console.error("Connection failed:", err);
    process.exit(1);
  }
}

testConnection();
