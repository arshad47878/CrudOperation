import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <button>Home</button>
        </li>
        <li>
          {" "}
          <button>Gallery</button>
        </li>
        <li>
          {" "}
          <button>About Us</button>
        </li>
        <li>
          <button>Find Us on Social Media</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
