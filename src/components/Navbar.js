import React from "react";
import logo from "../images/logo.png";
import profile from '../icons/profile.svg'
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      {/* upaged logo */}
      <img src={logo} />
      {/* tabs */}
      <div className="tabs">
        <a>Find Work</a>
        <a>Timesheets</a>
        <a>Messaging</a>
      </div>
      <div className="profile">
      {/* profile */}
         <div className="profile-img-container">
           <img src={profile}/>
         </div>
         <div>Log out</div>
      </div>
    </div>
  );
}

export default Navbar;
