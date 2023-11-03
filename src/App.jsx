import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/features/products/productsSlice";

// Components
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Products from "./components/Products";
import Details from "./components/Details";
import ShoppingCart from "./components/ShoppingCart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Toaster } from 'react-hot-toast';

import "../src/styles/App.css";

function App() {

  const dispatch = useDispatch();

  // Sayfa yüklendiğinde ürünler axios ile çekilecek.
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  const loading = useSelector(state => state.productsReducer.loading);

  return (

    <Router>

      <Toaster />

      <Navbar />

      <Routes>
        <Route path="/" element={loading ? <Loading /> : <Products />} />
        <Route path="/details/:id" element={<Details />} /> {/* "id" dinamik olarak değişeceği için ":" kullandık.  */}
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>

    </Router>
  )
};

export default App;
