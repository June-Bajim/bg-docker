const express = require("express");
const { Pool } = require("pg");
const app = express();
const port = 5000;

const pool = new Pool({
  host: "db", // docker-compose service name
  user: "postgres",
  password: "postgres",
  database: "testdb",
  port: 5432,
});

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.send(`Database time: ${result.rows[0].now}`);
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
