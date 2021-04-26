/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import classNames from 'classnames';

import './Header.scss';
import logo from '../../images/header/logo.svg';
import searchIcon from '../../images/header/searchIcon.svg';
import shoppingBagIcon from '../../images/header/shoppingBagIcon.svg';
import { Nav } from '../Nav/Nav';

export function Header({ isClickBurger, onClickBurger }) {
  return (
    <header className={classNames(
      'header', { isActive: isClickBurger },
    )}
    >
      <div
        className="header__burger"
        onClick={() => {
          onClickBurger(true);
        }}
      />
      <img
        src={logo}
        className="header__logo"
        alt="logo"
      />
      <div className="header__wrapper">
        <Nav />
        <div className="header__icons">
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
        </div>
      </div>

    </header>
  );
}
