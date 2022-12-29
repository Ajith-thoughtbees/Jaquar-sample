import React, { useState } from "react";
import Logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
        <Link to="/home"> Home </Link>
        <Link to="/home/product"> Menu </Link>
        <Link to="/home/about"> About </Link>
        <Link to="/home/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/home"> Home </Link>
        <Link to="/home/product"> Menu </Link>
        <Link to="/home/about"> About </Link>
        <Link to="/home/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
