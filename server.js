const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.get("/productos", async (req, res) => {
  const result = await pool.query("SELECT * FROM productos");
  res.json(result.rows);
});

app.listen(3000, () => console.log("API running"));
