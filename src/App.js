import './App.css';
import React, { useState } from 'react';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './views/Home.js';
import ProductsList from './views/ProductsList';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  const [isProductsList, setIsProductsList] = useState(false);
  console.log(data, isLoading);
const layout = isProducList ? <ProductsList /> : <Home setIsProductsList={setIsProductsList} />
  
  if(isProductsList) {
    layout = <ProductsList />
  } else {
    layout = <Home setIsProductsList={setIsProductsList} />
  }

  return (
    <div className="App">
      <Header setIsProductsList={setIsProductsList} />
      {layout}
      <Footer />
    </div>
  );
}

export default App;
