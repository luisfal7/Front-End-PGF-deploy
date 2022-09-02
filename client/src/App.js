import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Catalog from './components/Catalog';
import CardDetail from './components/CardDetail';
import Footer from './components/Footer';

function App() {
  
  return (

    <div>
      <Footer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Catalog />} />
        <Route exact path="/products/:id" element={<CardDetail/>} />
      </Routes>
    </div>
    
  );
}

export default App
