import React from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css";
const App = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default App;
