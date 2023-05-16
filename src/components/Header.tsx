import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Welcome to Albania</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
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
