import React from 'react';
import '../App.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer-text">&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
