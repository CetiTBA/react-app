import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Add your main content here */}
        <h2>Welcome to My React App</h2>
        <p>This is the main content of the app.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
