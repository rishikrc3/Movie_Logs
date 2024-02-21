import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css";
const App = () => {
  const [movies, setMovies] = useState([]);

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
