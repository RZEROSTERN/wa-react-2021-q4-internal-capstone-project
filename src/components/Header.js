import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <header class="wz-header">
            <input type="checkbox" id="nav-check"></input>
            <div class="nav-header">
                <div class="nav-title">Furnituria</div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div class="nav-links">
                <a href="/#">
                    <FontAwesomeIcon icon={faSearch} /> Search
                </a>
                <a href="/#">
                    <FontAwesomeIcon icon={faShoppingCart} /> Cart
                </a>
            </div>
        </header>
    );
}

export default Header;