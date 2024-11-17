// React
import React from 'react'

// React Router Dom
import { Link } from "react-router-dom"

// Redux
import { useSelector, useDispatch } from "react-redux"
import { add, remove, removeOne } from "../redux/features/navbar/navbarSlice.js"

// React Icons
import { FaTrash } from "react-icons/fa6"
import { FaMinus } from "react-icons/fa"
import { FaPlus } from "react-icons/fa"

// CSS
import "../styles/Orders.css"

const Orders = () => {

    const products = useSelector((state) => state.navbarReducer.value)
    const dispatch = useDispatch()

    return (
        <>
            {products?.map((product, index) => {
                return (
                    <div key={index} className="border border-1 rounded mb-3 d-md-flex p-2 position-relative">
                        <Link to={`/details/${product?.id}`} className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                            <img className="img-fluid cart-product-image mb-3" src={product?.thumbnail} alt={`${product?.id} + image`} />
                        </Link>

                        <div className="col-12 col-md-9 p-1">
                            <div className='d-flex justify-content-between align-items-center mb-1'>
                                <div>
                                    <div className="fw-bold text-warning fs-4">{product?.brand ? product?.brand : product?.title}</div>
                                </div>
                                <FaTrash className='text-danger fs-4 trash-icon' onClick={() => dispatch(remove(product?.id))} />
                            </div>

                            <div className='fs-5 mb-3'>
                                <span>Price per product: </span>
                                <span className='me-1 fw-bold'>$</span>
                                <span className="text-warning fw-bold">{product?.price?.toFixed(1)}</span>
                            </div>

                            <div className="d-flex edit border border-1 py-1 px-2 fw-bold mb-3">
                                <div className={`px-2 minus d-flex justify-content-center align-items-center ${product?.quantity < 2 ? 'quantity-greater-than-two' : ''}`} onClick={() => dispatch(removeOne(product?.id))}><FaMinus /></div>
                                <div className="px-2 d-flex justify-content-center align-items-center">{product?.quantity}</div>
                                <div className="px-2 plus d-flex justify-content-center align-items-center" onClick={() => dispatch(add(product))}><FaPlus /></div>
                            </div>

                            <div className='position-absolute cart-product-bottom p-2'>
                                <div className='d-flex justify-content-end gap-2 align-items-center'>
                                    <div className='fs-5'>
                                        <span className='me-1 fw-bold'>$</span>
                                        <span className='text-warning fw-bold'>{(product?.price?.toFixed(1) * product?.quantity)?.toFixed(1)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Orders
