// React
import React from 'react'

// Function
import { totalPrice } from "../helpers/totalPrice.js"

// CSS
import "../styles/OrderSummary.css"

const OrderSummary = ({ products }) => {

    const subTotal = totalPrice(products)?.toFixed(1)

    const discount = (totalPrice(products)?.toFixed(1) * (0.1))?.toFixed(2)

    const total = (totalPrice(products)?.toFixed(1) - totalPrice(products)?.toFixed(2) * (0.1))?.toFixed(2)

    return (
        <div className='border border-1 rounded p-3 mb-4 fs-5'>
            <p className="fw-bold fs-4 summary-title">Order Summary</p>

            <div className="d-flex justify-content-between mb-1">
                <div>Subtotal</div>
                <div>
                    <span className='me-1 fw-bold'>$</span>
                    <span className="product-price fw-bold">{subTotal}</span>
                </div>
            </div>

            <div className="d-flex justify-content-between mb-1">
                <div>Discount <span className="fw-bold">(10%)</span></div>
                <div>
                    <span className='me-1 fw-bold'>-$</span>
                    <span className="cart-discount fw-bold">{discount}</span>
                </div>
            </div>

            <div className="d-flex justify-content-between mb-1">
                <div>Shipping</div>
                <div>
                    <span className="text-success fw-bold">Free</span>
                </div>
            </div>

            <hr />

            <div className="d-flex justify-content-between mb-1">
                <div>Total</div>
                <div>
                    <span className='me-1 fw-bold'>$</span>
                    <span className="product-price fw-bold">{total}</span>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary