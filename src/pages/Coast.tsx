import React from 'react';
import sarandaImage from '../pictures/saranda.png';
import '../App.css';

const Coast: React.FC = () => {
  return (
    <div>
      <h2>Coast Page</h2>
      <div className="coast-container">
        <p>
          The Albanian coast offers breathtaking landscapes, pristine beaches, and crystal-clear waters. 
          Explore the charming coastal towns, such as Saranda, Vlorë, and Durrës, and indulge in the delicious seafood cuisine. 
          Whether you're looking for relaxation or adventure, the Albanian coast has something for everyone.
        </p>
        <img src={sarandaImage} alt="Saranda" className="coast-image" />
      </div>
    </div>
  );
};

export default Coast;
