import React from 'react';
import { Route } from 'react-router-dom';
import CarteDeVisite from './components/CarteDeVisite';
import Collapse from './components/Collapse';
import './styles/Index.scss';

export default function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={CarteDeVisite} />
    </div>
  );
}
