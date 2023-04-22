<<<<<<< HEAD
import React from 'react';
import { Route } from 'react-router-dom';
import CarteDeVisite from './components/CarteDeVisite';
import Collapse from './components/Collapse';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
>>>>>>> vCard
import './styles/Index.scss';

export default function App() {
  return (
<<<<<<< HEAD
    <div className='App'>
      <Route exact path='/' component={CarteDeVisite} />
=======
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
>>>>>>> vCard
    </div>
  );
}
