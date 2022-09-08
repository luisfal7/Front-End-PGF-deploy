import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Catalog from './components/Catalog';
import CardDetail from './components/CardDetail';
import CreateAccount from './components/CreateAccount';
import Account from './components/Account'
import Signin from './components/Signin'
import CatalogBrand from './components/CatalogBrand';
import {AuthContextProvider} from './context/AuthContext'

function App() {
  
  return (

    <div>
      <AuthContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Catalog />} />
        <Route exact path="/products/:id" element={<CardDetail/>} />
        <Route exact path="/signin" element={<Signin/>} />
        <Route exact path="/createaccount" element={<CreateAccount/>} />
        <Route exact path='/account' element={<Account/>} />
        <Route exact path="/colletions/:brand" element={<CatalogBrand/>} />
      </Routes>
      </AuthContextProvider>
    </div>
    
  );
}

export default App
