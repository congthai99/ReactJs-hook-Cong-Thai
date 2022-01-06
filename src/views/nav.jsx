import React from 'react';
import '../styles/styleNav.scss'

const Nav = () => {
    return (
        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    );
}

export default Nav;