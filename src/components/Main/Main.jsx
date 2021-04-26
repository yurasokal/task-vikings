/* eslint-disable react/prop-types */
import React from 'react';
import './Main.scss';
import { Hero } from '../Hero/Hero';

export function Main({ isClickBurger }) {
  return (
    <main className="main">
      <Hero isClickBurger={isClickBurger} />
    </main>
  );
}
