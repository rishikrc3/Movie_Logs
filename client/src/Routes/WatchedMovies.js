import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import WatchedCard from "./WatchedCards";
const WatchedMovies = () => {
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3000/movies");
        console.log(response);
        setWatchedMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllMovies();
  }, []);
  console.log(watchedMovies);
  return (
    <div className="watched-movies-container">
      <h2 className="text-2xl font-bold mb-4">All Movies</h2>
      <div className="grid grid-cols-3 gap-4">
        {watchedMovies.map((movie) => (
          <WatchedCard key={movie.imdbID} movieData={movie} />
        ))}
      </div>
    </div>
  );
};

export default WatchedMovies;
