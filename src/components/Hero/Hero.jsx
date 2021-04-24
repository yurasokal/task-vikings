import React from 'react';
import './Hero.scss';
// import hero from '../../images/main/viking.png';

export function Hero() {
  return (
    <div className="hero">
      <div className="hero__viking" />
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
  );
}
