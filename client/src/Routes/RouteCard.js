import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useMovieCard from "./useMovieCard";
import axios from "axios";

const RouteCard = () => {
  const data = useParams();
  const { imdbID } = data;
  const movieData = useMovieCard(imdbID);
  const [isWatched, setIsWatched] = useState(false);
  console.log(movieData);

  const markAsWatched = async () => {
    try {
      await axios.post("http://localhost:3000/movies/watched", {
        Title: movieData.Title,
        Genre: movieData.Genre,
        imdbRating: movieData.imdbRating,
        imdbID: movieData.imdbID,
      });
      console.log("Request successful!");
      setIsWatched(true);
    } catch (error) {
      console.error(error);
    }
  };
  if (movieData === null) return <>Loading</>;
  return (
    <>
      {" "}
      <div className="movie-card-setup flex items-center space-x-4">
        <div className="m-9">
          <div className="movie-card shadow-md rounded-md overflow-hidden bg-white transition-transform duration-300 transform hover:scale-105">
            <img src={movieData.Poster} alt="hi" className=" object-cover" />
          </div>
          {!isWatched && (
            <button
              onClick={markAsWatched}
              className="mt-2 bg-blue-500 text-white py-1 px-2 rounded"
            >
              Mark as Watched
            </button>
          )}
          {isWatched && (
            <p className="text-green-500 mt-2">Marked as Watched</p>
          )}
        </div>

        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-2">{movieData.Title}</h3>
          <p className="text-sm text-gray-600 mb-2">{movieData.Genre}</p>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div>
              <strong>Released:</strong> {movieData.Released}
            </div>
            <div>
              <strong>Runtime:</strong> {movieData.Runtime}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div>
              <strong>Director:</strong> {movieData.Director}
            </div>
            <div>
              <strong>Awards:</strong> {movieData.Awards}
            </div>
          </div>
          <p className="text-sm">{movieData.Plot}</p>
        </div>
      </div>
    </>
  );
};

export default RouteCard;
