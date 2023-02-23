import React from 'react';
import './App.css';
// import { BrowserRouter, Route } from 'react-router-dom';

import { About, CTA, Header, Navbar, Footer } from './components';
import { Login, Register, Home } from './pages';

const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <About />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
