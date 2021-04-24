import React from 'react';
import './Nav.scss';

export function Nav() {
  return (
    <nav className="nav header__nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a
            className="nav__link"
            href="#vikings"
          >
            Vikings
          </a>
        </li>
        <li className="nav__item">
          <a
            className="nav__link"
            href="#contact"
          >
            Ancient Egypt
          </a>
        </li>
        <li className="nav__item">
          <a
            className="nav__link"
            href="#seltics"
          >
            Seltics
          </a>
        </li>
        <li className="nav__item">
          <a
            className="nav__link nav__link--sale"
            href="#sale"
          >
            Sale
          </a>
        </li>
      </ul>
    </nav>
  );
}
