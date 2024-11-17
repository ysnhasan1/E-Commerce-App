// React
import React from 'react'

// Function
import { totalPrice } from "../helpers/totalPrice.js"

const OrderSummary = ({ products }) => {

    const subTotal = totalPrice(products).toFixed(1)

    const discount = (totalPrice(products).toFixed(1) * (0.1)).toFixed(2)

    const total = (totalPrice(products).toFixed(1) - totalPrice(products).toFixed(2) * (0.1)).toFixed(2)

    return (
        <div className='border border-1 rounded fs-5 p-3 mb-4'>
            <p className="fw-bold fs-4">Order Summary</p>

            <div className="d-flex justify-content-between mb-1">
                <div>Subtotal</div>
                <div>
                    <span className='me-1 fw-bold'>$</span>
                    <span className="text-warning fw-bold">{subTotal}</span>
                </div>
            </div>

            <div className="d-flex justify-content-between mb-1">
                <div>Discount <span className="fw-bold">(10%)</span></div>
                <div>
                    <span className='me-1 fw-bold'>-$</span>
                    <span className="text-danger fw-bold">{discount}</span>
                </div>
            </div>

            <div className="d-flex justify-content-between mb-4">
                <div>Delivery Fee</div>
                <div>
                    <span className="text-success fw-bold">Free Delivery</span>
                </div>
            </div>

            <hr />

            <div className="d-flex justify-content-between mb-4">
                <div>Total</div>
                <div>
                    <span className='me-1 fw-bold'>$</span>
                    <span className="text-warning fw-bold">{total}</span>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary