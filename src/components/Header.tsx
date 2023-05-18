import React from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../pictures/albanian-flag.png';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={companyLogo} alt="Company Logo" className="logo" />
        </Link>
        <span className="company-name">Albanian Adventure</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/coast">Coast</Link>
          </li>
          <li>
            <Link to="/landscape">Landscape</Link>
          </li>
          <li>
            <Link to="/food">Food</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
