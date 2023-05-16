import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Coast from './pages/Coast';
import Landscape from './pages/Landscape';
import Food from './pages/Food';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/coast" element={<Coast />} />
            <Route path="/landscape" element={<Landscape />} />
            <Route path="/food" element={<Food />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
