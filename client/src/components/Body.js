import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfMovies, setListofMovies] = useState([]);
  const [movieName, setMovieName] = useState("Attack on Titan");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.omdbapi.com/?apikey=66263dea&s=" + movieName + "#"
      );
      setListofMovies(response.data.Search);
    } catch (error) {
      console.error(error);
    }
  };
  const handleClick = () => {
    fetchData();
  };
  console.log(listOfMovies);
  return (
    <div className="Body">
      <div className="SearchBar bg-gray-100 px-4 py-3 flex items-center ">
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus: outline-double w-1/2"
        />
        <button
          className="Search-Button bg-pink text-white px-4 py-3 rounded-md ml-4 transition duration-300 bg-pink-500 hover:bg-pink-900"
          onClick={handleClick}
        >
          <h2>Search</h2>
        </button>
      </div>

      <div className="movie-cards flex flex-wrap ">
        {listOfMovies.map((listOfMovie) => (
          <Link
            to={"/movies/" + listOfMovie.imdbID}
            key={listOfMovie.imdbID}
            className="custom-link"
          >
            <MovieCard moviesData={listOfMovie} key={listOfMovie.imdbID} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
