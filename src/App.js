import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ListProduct from './Pages/ListProduct'

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<ListProduct />} path="/list-product" />
    </Routes>
  );
}

export default App;
