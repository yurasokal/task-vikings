import React from 'react';
import './Hero.scss';
import hero from '../../images/main/viking.png';

function Hero() {
  return (
    <div className="hero">
      <img
        className="hero__photo"
        src={hero}
        alt="people walks"
      />
      <div className="hero__heading">
        Fenrir The Monster Wolf of Norse Mythology Necklace
      </div>
      <div className="age__price">
        $19.95
        <div className="age__price--old">
          $29.95
        </div>
      </div>
    </div>
  );
}

export default Hero;
