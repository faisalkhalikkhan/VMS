import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import 'antd/dist/reset.css';

import { About, CTA, Header, Navbar, Footer } from "./components";
import { Login, Register } from "./pages";
import Dashboard from "./components/Dashboard/Dashboard";
import ParkingLotForm from "./components/ParkingLotForm/ParkingLotForm";
import BillBoard from "./components/BillBoard/BillBoard";

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
          <Route path="/create-parking-lot-form" element={<ParkingLotForm />} />
          <Route path="/generate-bill" element={<BillBoard />} />
          </Routes>
        </div>
      
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
