// React
import React from "react"

// React Router Dom
import { Link } from "react-router-dom"

// Redux
import { useSelector, useDispatch } from "react-redux"
import { add } from "../redux/features/navbar/navbarSlice"

// React Icons
import { BsCart4 } from "react-icons/bs"

// Lazy Load
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/black-and-white.css"
import placeholder from "../../assets/placeholder.svg"

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

            <H1 title="Products" className="text-center fs-2" />

            <div className="container">
                <div className="row">
                    {products?.length > 0 && products?.map((product, index) => {
                        return (
                            <div className="product col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4 fs-5" key={index}>
                                <div className="card d-flex flex-column align-items-center border-0"
                                    style={{ boxShadow: "rgba(0, 0, 0, 0.07) 0px 4px 12px" }}>
                                    <Link to={`/details/${product?.id}`}>
                                        <LazyLoadImage
                                            src={product?.thumbnail}
                                            alt={product?.id + " image"}
                                            className="img-fluid"
                                            placeholderSrc={placeholder}
                                            effect="black-and-white"
                                            width="200px"
                                            height="200px"
                                            style={{ color: "black" }}
                                        />
                                    </Link>

                                    <p className="title">{product?.title}</p>

                                    <div className="d-flex justify-content-between align-items-center w-100 p-2">
                                        <div className="fs-5">
                                            <span className='me-1 fw-bold'>$</span>
                                            <span className="price fw-bold">{product?.price?.toFixed(1)}</span>
                                        </div>
                                        <BsCart4 className="shopping-cart fs-4" onClick={() => dispatch(add(product))} />
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