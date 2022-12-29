import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/car5.jpg";
import "../styles/Home.css";


function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Jaquar </h1>
        <p> The Leaping Jaguar</p>
        <Link to="/home/product">
          <button> ORDER NOW </button>
        
        </Link>
      </div>
    </div>
  );
}

export default Home;
