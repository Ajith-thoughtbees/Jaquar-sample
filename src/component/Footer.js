import React from "react";
import '../styles/Footer.css';
import Facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import  youtube from '../assets/youtube.png';

function Footer() {
    return (
      <div className="footer">
        <div className="socialMedia">
        <img src={Facebook} />
        <img src={twitter} className="black"/>
        <img src={instagram} />
        <img src={youtube} />
        </div>
        <p> &copy; 2021 Cars.com</p>
      </div>
    );
  }
  
  export default Footer;