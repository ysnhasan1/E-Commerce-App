import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/features/navbar/navbarSlice";

import "../styles/SingleProduct.css";

function SingleProduct(props) {
    {/* id, thumbnail, category, brand, title, description, price */ }

    const products = useSelector(state => state.productsReducer.value); // Returns an array

    const productInDetailsPage = products.find(eachProduct => eachProduct.id == props.id); // Detaylar sayfasındaki ürün

    const dispatch = useDispatch();

    return (

        <div id="single-product-container">

            <div className="flex-item">
                <img src={props.thumbnail} alt="product image" />
            </div>

            <div id="details" className="flex-item">
                <h2 id="brand">{props.brand}</h2>
                <h2 id="title">{props.title}</h2>
                <h2 id="description">"{props.description}"</h2>
                <span>category: {props.category}</span>

                <div id="price-container">
                    <h2 id="price">
                        <span>$</span>
                        {props.price}
                    </h2>
                </div>

                <button onClick={() => dispatch(add(productInDetailsPage))}>Add to cart</button> {/* Sepete ekleme işlemi */}
            </div>
        </div>
    )
};

export default SingleProduct;