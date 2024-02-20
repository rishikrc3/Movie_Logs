const pg = require("pg");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Movie_Logs",
  password: "12345",
  port: 5432,
});

db.connect();
app.get("/movies", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM movies");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
  }
});

app.post("/movies", (req, res) => {
  const { title } = req.body;
  console.log(title);
  res.send(`Received movie title: ${title}`);
});
app.listen(3000, () => {
  console.log("Server is on port 3000");
});
