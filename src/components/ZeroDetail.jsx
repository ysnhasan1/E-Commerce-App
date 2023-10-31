import React from "react";
import { ImSad } from "react-icons/im";

import "../styles/ZeroDetail.css";

function ZeroDetail() {
    return (
        <div id="zero-detail-container">
            <h4>There is no detail. If you want to review a product, select it from the home page!</h4>
            <ImSad id="sad-icon" />
        </div>
    )
};

export default ZeroDetail;