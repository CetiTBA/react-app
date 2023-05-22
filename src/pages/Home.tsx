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
        <div className="text-container">
          <p className="image-description">
            Text next to the image.
          </p>
          <p className="image-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget gravida tellus, sit amet viverra sapien.
            Proin id libero elementum, ultrices risus in, dapibus metus. In tempor massa nec malesuada pellentesque.
            Donec consectetur neque id efficitur cursus. Sed vestibulum, metus et cursus mattis, est risus ullamcorper tortor,
            a aliquet purus justo in metus. Suspendisse eleifend a sem at lobortis. Sed faucibus aliquet lorem ac pharetra.
            Duis aliquam dignissim sapien a varius. Quisque tincidunt quam id quam blandit, sed fermentum tortor iaculis.
            Integer ac malesuada mi. Integer pellentesque ipsum id mauris sollicitudin dictum.
          </p>
        </div>
      </div>
      <div className="additional-content">
        <p>
          Additional content goes here.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eleifend tortor.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Fusce nec ex libero. Phasellus fringilla, metus id pulvinar efficitur, nunc elit commodo neque,
          in dapibus nunc massa in sem. Sed mollis, eros at ultrices dignissim, libero justo euismod magna,
          vitae posuere quam nulla eu sem. Quisque eu lobortis mi. Proin aliquam risus id sapien feugiat,
          nec elementum enim vestibulum. Vestibulum in consectetur metus, et finibus nulla. Nullam eget purus id ante eleifend egestas.
          Vivamus aliquam, purus vel scelerisque varius, tortor risus finibus nulla, sit amet varius dui risus eu mi.
        </p>
      </div>
    </div>
  );
};

export default Home;
