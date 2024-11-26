import React from "react";
import "./Header.scss";

import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";


import { LINKS } from "../../static";


const Header = () => {
  const linkItems = LINKS.map((item) => (
    <li key={item.id} className="navbar__item">
      <a href="#" className="navbar__link">
        <span>{item.name}</span>
      </a>
    </li>
  ));
  return (
    <header className="header" id="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar__logo">
            <FaApple />
          </div>
          <ul className="navbar__collection">{linkItems}</ul>
          <div className="navbar__icons">
            <IoIosSearch />
            <AiOutlineShopping />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
