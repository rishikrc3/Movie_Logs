import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
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

  console.log(listOfMovies);
  return <div>Hi this is the body</div>;
};

export default Body;
