import { useState, useEffect } from "react";
import axios from "axios";
const useMovieCard = (imdbID) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get(
      "https://www.omdbapi.com/?apikey=66263dea&i=" + imdbID + "#"
    );
    setMovieData(response.data);
  };

  return movieData;
};

export default useMovieCard;
