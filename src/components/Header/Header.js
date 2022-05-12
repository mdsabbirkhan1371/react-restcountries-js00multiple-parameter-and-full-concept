import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <a href="/home">Home</a>
            <a href="/product">Product</a>
            <a href="/service">Service</a>
            <a href="/contact">Contact</a>
        </div>
    );
};

export default Header;