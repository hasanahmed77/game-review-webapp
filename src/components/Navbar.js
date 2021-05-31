import React from 'react';
import Home from '../images/home.svg';

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="#home"><img src={Home} alt="Home" /></a>
            <a href="#profile">profile</a>
            <a href="#review">+ review</a>
        </div>
    )
}

export default Navbar
