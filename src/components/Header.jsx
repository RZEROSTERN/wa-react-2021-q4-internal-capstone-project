import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useSearchSubmit from '../utils/hooks/useSearchSubmit';

const Header = () => {
    const {handleChange, handleSubmit} = useSearchSubmit();

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
                <form className="search-form" onSubmit={handleSubmit}>
                    <input type="text" name="searchTerm" onChange={handleChange} />
                </form>
                <a href="/#">
                    <FontAwesomeIcon icon={faSearch}/> Search
                </a>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} /> Cart
                </Link>
            </div>
        </header>
    );
}

export default Header;