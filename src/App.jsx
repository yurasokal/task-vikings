import React from 'react';
import './main.scss';
import './App.scss';
import './reset.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

export function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}
