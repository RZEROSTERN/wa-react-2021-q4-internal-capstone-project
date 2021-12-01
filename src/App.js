import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import RouterSwitch from './components/router/RouterSwitch';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  // const [isProductsList, setIsProductsList] = useState(false);
  
  // const layout = isProductsList ? <ProductsList /> : <Home setIsProductsList={setIsProductsList} />

  return (
    <div className="App">
      <Router>
        <Header />
          <RouterSwitch />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
