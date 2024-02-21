import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css";
const App = () => {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/movies");
  //       setMovies(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  console.log(movies);

  return (
    <>
      <div>
        <Header />
        <Body />
      </div>
    </>
  );
};

export default App;
