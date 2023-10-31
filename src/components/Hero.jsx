import React from "react";
import HeroImg from "../../assets/hero.png";

import "../styles/Hero.css";

function Hero() {
    return (
        <div id="hero-container">
            <img src={HeroImg} alt="hero image" />
        </div>
    )
};

export default Hero;