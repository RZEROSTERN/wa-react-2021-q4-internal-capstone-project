import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="wz-header">
            <input type="checkbox" id="nav-check"></input>
            <div className="nav-header">
                <div className="nav-title">
                    <Link to="/">Furnituria</Link>
                </div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <FontAwesomeIcon icon={faBars} />
                </label>
            </div>
            <div className="nav-links">
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