import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { About, CTA, Header, Navbar, Footer } from "./components";
import { Login, Register, Home } from "./pages";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      
        <div className="gradient__bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/home" element={<Dashboard /> } />
          </Routes>
        </div>
      
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
