import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Catalog from './components/Catalog';
import CardDetail from './components/CardDetail';
import CatalogBrand from './components/CatalogBrand';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import SizeChart from './components/SizeChart';

function App() {
  
  return (

    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Catalog />} />
        <Route exact path="/products/:id" element={<CardDetail/>} />
        <Route exact path="/colletions/:brand" element={<CatalogBrand/>} />
        <Route exact path= "/aboutUs" element={<AboutUs/>} />
        <Route exact path= "/contactUs" element={<ContactUs/>} />
        <Route exact path= "/sizeChart" element={<SizeChart/>} />
      </Routes>
    </div>
    
  );
}

export default App
