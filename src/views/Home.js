import Slider from "react-slick";
import sliderData from '../mocks/en-us/featured-banners.json';
import productCategoriesData from '../mocks/en-us/product-categories.json';
import { sliderBannersSettings, sliderProductsSettings } from '../utils/constants.js';
import SliderBannerItem from "../components/SliderBannerItem";
import SliderProductItem from "../components/SliderProductItem";
import ProductsListContainer from "../components/ProductsListContainer";
import {Link} from 'react-router-dom';

const Home = (props) => {    
    const sliderLayoutItems = sliderData.results.map((item) => {
        return ( <SliderBannerItem item={item} key={item.id} /> );
    });

    const productSliderItems = productCategoriesData.results.map((item) => {
        return ( <SliderProductItem item={item} key={item.id} /> );
    });

    return (
        <section className="wz-home">
            <Slider {...sliderBannersSettings}>
                {sliderLayoutItems}
            </Slider>
            <Slider {...sliderProductsSettings}>
                {productSliderItems}
            </Slider>
            <h2 className="wz-title">Featured products</h2>
            <ProductsListContainer />
            <div className="wz-container wz-center">
                <Link to="/products">View all products</Link>
            </div>
        </section>
    );
}

export default Home;