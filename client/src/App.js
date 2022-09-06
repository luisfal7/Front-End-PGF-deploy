import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Catalog from './components/Catalog';
import CardDetail from './components/CardDetail';
<<<<<<< HEAD
import CreateAccount from './components/CreateAccount';
import Account from './components/Account'
import Signin from './components/Signin'
=======
import CatalogBrand from './components/CatalogBrand';
>>>>>>> fd3ccf1f4e424348e04fa3256848355621b3b729

function App() {
  
  return (

    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Catalog />} />
        <Route exact path="/products/:id" element={<CardDetail/>} />
<<<<<<< HEAD
        <Route exact path="/signin" element={<Signin/>} />
        <Route exact path="/createaccount" element={<CreateAccount/>} />
        <Route exac path='/account' element={<Account/>} />
=======
        <Route exact path="/colletions/:brand" element={<CatalogBrand/>} />
>>>>>>> fd3ccf1f4e424348e04fa3256848355621b3b729
      </Routes>
    </div>
    
  );
}

export default App
