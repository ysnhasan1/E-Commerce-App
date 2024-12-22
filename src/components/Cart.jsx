// React
import React from "react"

// Redux
import { useSelector } from "react-redux"

// Atoms
import H1 from './../atoms/H1'

// Components
import ZeroProduct from "./ZeroProduct.jsx"
import Orders from "./Orders.jsx"
import OrderSummary from "./OrderSummary.jsx"

const Cart = () => {

  const products = useSelector((state) => state.navbarReducer.value)

  return (
    <>
      <div className="container">
        <H1 title="Your Cart" className="mb-4 fs-5" />
      </div>

      {products.length === 0 ? <ZeroProduct /> : (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
              <Orders />
            </div>

            <div className="col-12 col-md-5">
              <OrderSummary products={products} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart