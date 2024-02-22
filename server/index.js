const pg = require("pg");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(express.json());

app.use(cors());
//specifying the database
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Movie_Logs",
  password: "12345",
  port: 5432,
});

//connecting the database
db.connect();

//to get all the movies
app.get("/movies", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM movies");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
  }
});

app.post("/movies/watched", async (req, res) => {
  const { Title, Genre, imdbRating, imdbID, posterID } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO movies (title,genre,rating,imdbID,posterID ) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [Title, Genre, imdbRating, imdbID, posterID]
    );
    const insertedMovie = result.rows[0];
    res.json(insertedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server is on port 3000");
});
