import React from "react";

import { Link } from "react-router-dom";

const pic = require("../resources/logo.png");

const Navbar: React.FC = () => {
  return (
    <div className="w-full fixed z-10 flex p-5 justify-between items-center text-xs bg-blue-500">
      <div className="text-xl text-white hidden sm:flex">
        <span className="text-2xl">M</span>
        <span className="text-md">a</span>
        <span className="text-lg">N</span>
      </div>
      <div className="mr-5 w-full flex justify-between sm:gap-8 sm:w-96">
        <Link className="hover:bg-blue-300 p-2 rounded text-white" to="/">
          Dashboard
        </Link>
        <Link
          className="hover:bg-blue-300 p-2 rounded text-white"
          to="/services"
        >
          Services
        </Link>
        <Link
          className="hover:bg-blue-300 p-2 rounded text-white"
          to="/contact"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
