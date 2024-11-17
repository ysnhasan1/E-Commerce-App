// React
import React from "react"

// React Icons
import { ImSad } from "react-icons/im"

const ZeroProduct = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5 fs-3">
            <p className="text-muted">There is no product in your cart!</p>
            <ImSad className="text-warning" />
        </div>
    )
}

export default ZeroProduct