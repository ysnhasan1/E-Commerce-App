// React
import React from "react"

// Redux
import { useDispatch } from "react-redux"
import { add } from "../redux/features/navbar/navbarSlice"

// Atoms
import Reviews from "./Reviews"

// CSS
import "../styles/Product.css"

const Product = ({ product }) => {

    const dispatch = useDispatch()

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <img className="img-fluid w-100 card mb-2" src={product?.thumbnail} alt={product?.id + " image"} />
                </div>

                <div className="col-12 col-md-7">
                    {product?.brand ?
                        <>
                            <h2 className="fw-bold text-warning fs-1">{product?.brand}</h2>
                            <p className="fst-italic text-muted mb-4 fs-5">{product?.title}</p>
                        </>
                        : <h2 className="fw-bold text-warning mb-4 fs-1">{product?.title}</h2>
                    }

                    <div>
                        {product?.tags?.map((tag, index) => {
                            return (
                                <span className="border border-warning py-1 px-2 rounded me-1" key={index}>{tag}</span>
                            )
                        })}
                    </div>

                    <p className="my-4 fs-3">{product?.description}</p>

                    <div className="my-3">
                        <span className="fw-bold">category: </span>
                        <span className="text-muted">{product?.category}</span>
                    </div>

                    <div className="mb-3 d-flex">
                        <span className="border border-1 py-1 px-2 rounded me-1">{product?.returnPolicy}</span>
                        <span className="border border-1 py-1 px-2 rounded me-1">{product?.shippingInformation}</span>
                    </div>

                    <Reviews product={product} />

                    <div className="d-flex gap-3 mb-4">
                        <div>
                            <div className="d-flex align-items-center">
                                <div className='fs-3'>
                                    <span className='me-1 fw-bold'>$</span>
                                    <span className="text-warning fw-bold">{product?.price.toFixed(1)}</span>
                                </div>
                                <div className="discount fw-bold mx-3 px-2 py-1">-{product?.discountPercentage}%</div>
                            </div>

                            <div className="fw-bold text-success">Free Delivery</div>
                        </div>
                        <button className="btn btn-warning text-white mt-1 fw-bold w-100 fs-4" onClick={() => dispatch(add(product))}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product