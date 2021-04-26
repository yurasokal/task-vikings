import React, { useState } from 'react';
import './main.scss';
import './App.scss';
import './reset.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

export function App() {
  const [isClickBurger, setClickBurger] = useState(false);

  return (
    <div className="App">
      <Header
        onClickBurger={setClickBurger}
        isClickBurger={isClickBurger}
      />
      <Main isClickBurger={isClickBurger} />
    </div>
  );
}
