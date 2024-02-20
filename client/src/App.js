import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/movies");
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(movies);

  return (
    <>
      <div>Hi</div>
    </>
  );
};

export default App;
