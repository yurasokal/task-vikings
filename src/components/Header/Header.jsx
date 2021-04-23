import React from 'react';
import './Header.scss';
import logo from '../../images/header/logo.svg';
import searchIcon from '../../images/header/searchIcon.svg';
import shoppingBagIcon from '../../images/header/shoppingBagIcon.svg';
import Nav from '../Nav/Nav';

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        className="header__logo"
        alt="logo"
      />
      <Nav />
      <a href="#search" className="header__searchIcon">
        <img
          src={searchIcon}
          className="header__icon"
          alt="logo"
        />
      </a>

      <a href="#shopping" className="header__shoppingBagIcon">
        <img
          src={shoppingBagIcon}
          className="header__icon"
          alt="logo"
        />
      </a>
    </header>
  );
}

export default Header;
