import React from "react";
import { ImSad } from "react-icons/im";

import "../styles/ZeroProduct.css";

function ZeroProduct() {
    return (
        <div id="zero-product-container">
            <h4>There is no product in your cart!</h4>
            <ImSad id="sad-icon" />
        </div>
    )
};

export default ZeroProduct;