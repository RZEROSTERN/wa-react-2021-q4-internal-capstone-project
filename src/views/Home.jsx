import ProductsListContainer from "../components/ProductsListContainer";
import {Link} from 'react-router-dom';
import SliderBanners from "../components/sliders/SliderBanners";
import { useCategories } from "../utils/hooks/useCategories";
import SliderCategories from "../components/sliders/SliderCategories";

const Home = (props) => {

    const { data, isLoading } = useCategories();
    console.log(data, isLoading);

    return (
        <section className="wz-home">
            <SliderBanners />
            <SliderCategories />
            <h2 className="wz-title">Featured products</h2>
            <ProductsListContainer />
            <div className="wz-container wz-center">
                <Link to="/products">View all products</Link>
            </div>
        </section>
    );
    
}

export default Home;