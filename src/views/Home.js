import Slider from "react-slick";
import sliderData from '../mocks/en-us/featured-banners.json';
import productCategoriesData from '../mocks/en-us/product-categories.json';
import productsData from '../mocks/en-us/featured-products.json';
import { sliderBannersSettings, sliderProductsSettings } from '../utils/constants.js';
import Product from '../components/Product.js';
import SliderBannerItem from "../components/SliderBannerItem";
import SliderProductItem from "../components/SliderProductItem";

const Home = (props) => {    
    const sliderLayoutItems = sliderData.results.map((item) => {
        return ( <SliderBannerItem item={item} /> );
    });

    const productSliderItems = productCategoriesData.results.map((item) => {
        return ( <SliderProductItem item={item} /> );
    });

    const productsDataItems = productsData.results.map((item) => {
        return ( <Product itemData={item} key={item.id} /> );
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
            <div className="wz-container" key="products-container">
                {productsDataItems}
            </div>
            <div className="wz-container wz-center">
                <button className="wz-btn-primary" onClick={() => props.setIsProductsList(true)}>View all products</button>
            </div>
        </section>
    );
}

export default Home;