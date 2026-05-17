const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_eM5xpNGy6Smu@ep-fancy-glade-aq7yy3gy-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
    ssl: { rejectUnauthorized: false }
});

app.get("/productos", async (req, res) => {
    const result = await pool.query("SELECT * FROM productos");
    res.json(result.rows);
});

app.listen(3000, () => console.log("API running"));