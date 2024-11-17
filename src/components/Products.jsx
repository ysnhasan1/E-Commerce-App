// React
import React from "react"

// React Router Dom
import { Link } from "react-router-dom"

// Redux
import { useSelector, useDispatch } from "react-redux"
import { add } from "../redux/features/navbar/navbarSlice"

// React Icons
import { BsCart4 } from "react-icons/bs"

// Atoms
import H1 from "../atoms/H1"

// Components
import Hero from "./Hero"

// CSS
import "../styles/Products.css"

const Products = () => {

    const products = useSelector(state => state.productsReducer.value)
    const dispatch = useDispatch()

    return (
        <>
            <Hero />

            <H1 title="Products" className="text-center" />

            <div className="container">
                <div className="row">
                    {products?.length > 0 && products?.map((product, index) => {
                        return (
                            <div className="product col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-3 fs-4" key={index}>
                                <div className="card d-flex flex-column align-items-center">
                                    <Link to={`/details/${product?.id}`}>
                                        <img className="img-fluid w-50 my-3" src={product?.thumbnail} alt={product?.id + " image"} />
                                    </Link>

                                    <p className="title">{product?.title}</p>

                                    <div className="d-flex justify-content-between align-items-center w-100 p-2">
                                        <div className='fs-3'>
                                            <span className='me-1 fw-bold'>$</span>
                                            <span className="text-warning fw-bold">{product?.price?.toFixed(1)}</span>
                                        </div>
                                        <BsCart4 className="shopping-cart fs-3" onClick={() => dispatch(add(product))} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Products