// src/App.js
import React from 'react';
import NavBar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
