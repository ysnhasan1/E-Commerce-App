// React
import React from "react"

// React Router Dom
import { Link } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux'

// React Icons
import { BsCart4 } from "react-icons/bs"

// Function
import { numberOfProducts } from "../helpers/numberOfProducts"

// CSS
import "../styles/Navbar.css"

const Navbar = () => {

    const products = useSelector(state => state.navbarReducer.value)

    return (
        <div className="nav-container sticky-top">
            <nav className="container d-flex justify-content-between align-items-center p-3">
                <Link to={"/"} onClick={() => window.scrollTo(0, 0)} className="logo">Home</Link>

                <div>
                    <Link to={"/cart"} onClick={() => window.scrollTo(0, 0)}>
                        <BsCart4 className="cart me-1" />
                    </Link>
                    <span className="badge badge-bg-color">{numberOfProducts(products)}</span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar