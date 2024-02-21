import React from "react";
import img from "./logo/logo.jpg";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 m-1  bg-pink-300 shadow-xl">
      <div className="w-40">
        <img src={img} alt="logo-" className="cursor-pointer" />
      </div>
      <div className="nav-items">
        <ul className="flex space-x-4 ">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
