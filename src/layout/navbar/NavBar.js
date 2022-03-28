import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">บริการ</Link>
        </li>
        <li>
          <Link to="/orders">รายการ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
