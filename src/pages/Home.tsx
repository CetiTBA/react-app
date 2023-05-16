import React from 'react';
import beratImage from '../pictures/berat.png';
import '../App.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to the Home Page</h2>
      <div className="grid-container">
        <div className="image-container">
          <img src={beratImage} alt="Berat" className="home-image" />
          <div className="image-overlay"></div>
        </div>
          <p>
            Text next to the image.
          </p>
      </div>
      <div className="additional-content">
        <p>
          Additional content goes here.
        </p>
      </div>
    </div>
  );
};

export default Home;
