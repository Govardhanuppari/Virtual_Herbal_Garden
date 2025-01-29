import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Header.css'; // Header styles

const Header = ({ onLoginClick }) => {
    return (
        <header>
            <div className="logo">
                <img src="logo.webp" alt="Herbal Garden Logo" className="logo-image" />
                <h2>VHG</h2>
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    {/* Update navigation links to use React Router's Link */}
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/#ayush">AYUSH</Link></li>
                    <li><Link to="/plants">PLANTS</Link></li>
                    <li><Link to="/diseases">DISEASES</Link></li>
                </ul>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search for plants or diseases" />
                    <button className="search-btn">🔍</button>
                </div>
            </nav>
            <button className="login-btn" onClick={onLoginClick}>Login</button>
        </header>
    );
};

export default Header;
