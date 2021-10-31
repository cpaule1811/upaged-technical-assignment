import React from "react";
import logo from "../images/logo.png";
import profile from '../icons/profile.svg'
import menu from '../icons/menu.svg'
import tick from '../icons/tick.svg'
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="uPaged logo"/>
      <div className="tabs">
        <a href="/">Find Work</a>
        <a href="/">Timesheets</a>
        <a href="/">Messaging</a>
      </div>
      <div className="profile">
         <div className="profile-img-container">
           <img src={profile} alt="profile"/><img className="tick" src={tick} alt="tick"/>
         </div>
         <div>Log out</div>
      </div>
      <img className="menu" src={menu} alt="menu"/>
    </div>
  );
}

export default Navbar;
