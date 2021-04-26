/* eslint-disable react/prop-types */
import React from 'react';
import './Hero.scss';
import classNames from 'classnames';

export function Hero({ isClickBurger }) {
  return (
    <div className="hero">
      <div className={classNames(
        'hero__viking', { isActive: isClickBurger },
      )}
      >
        <div className="hero__heading">
          Fenrir The Monster Wolf of Norse Mythology Necklace
        </div>
        <div className="hero__price">
          <div className="hero__price--new">
            $19.95
          </div>
          <div className="hero__price--old">
            $29.95
          </div>
        </div>
        <a
          className="hero__button button"
          href="https://www.astrology.com/compatibility/magic-8-ball-love.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          Start Shopping
        </a>
      </div>
    </div>
  );
}
