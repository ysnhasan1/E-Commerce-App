import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { add } from "../redux/features/navbar/navbarSlice";

// Component
import Hero from "./Hero";

import "../styles/Products.css";

function Products() {

    const products = useSelector(state => state.productsReducer.value); // products is an array

    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <>
            <Hero />

            <h1>PRODUCTS</h1>

            <div id="flex-container">
                {products.length > 0 && products.map((eachProduct, index) => {
                    return (
                        <div id="flex-item" key={index}>

                            <div id="product-head">
                                <img onClick={() => navigate(`/details/${eachProduct.id}`)}
                                    src={eachProduct.thumbnail} // thumbnail: küçük resim
                                    alt={eachProduct.id + " image"}>
                                </img>

                                <h2>{eachProduct.title}</h2>
                            </div>

                            <div id="product-info">
                                <h2>
                                    <span id="dolar-span">$</span>
                                    {eachProduct.price}
                                </h2>

                                <PiShoppingCart id="shopping-cart" onClick={() => dispatch(add(eachProduct))} /> {/* sepete ekleme işlemi */}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
};

export default Products;
