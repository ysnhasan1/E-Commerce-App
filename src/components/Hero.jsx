// React
import React from "react"

// Image
import HeroImg from "../../assets/hero.png"

const Hero = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <img className="img-fluid w-75" src={HeroImg} alt="hero image" />
        </div>
    )
}

export default Hero