import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
