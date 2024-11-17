// React
import React, { useEffect } from "react"

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Redux
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "./redux/features/products/productsSlice"

// Toast
import { Toaster } from 'react-hot-toast'

// Components
import Navbar from "./components/Navbar"
import Loading from "./components/Loading"
import Products from "./components/Products"
import Details from "./components/Details"
import Cart from "./components/Cart"

// CSS
import "../src/styles/App.css"

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const loading = useSelector(state => state.productsReducer.loading)

  return (
    <Router>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={loading ? <Loading /> : <Products />} />
        <Route path="/details/:id" element={<Details />} /> {/* "id" dinamik olarak değişeceği için ":" kullandık.  */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App