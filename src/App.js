import './App.css';
import React, { useState } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './views/Home.js';
import ProductsList from './views/ProductsList';

function App() {
  const [isProductsList, setIsProductsList] = useState(false);
  
  const layout = isProductsList ? <ProductsList /> : <Home setIsProductsList={setIsProductsList} />

  return (
    <div className="App">
      <Header setIsProductsList={setIsProductsList} />
      {layout}
      <Footer />
    </div>
  );
}

export default App;
