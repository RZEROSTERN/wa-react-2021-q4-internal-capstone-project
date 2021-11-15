import React, { Component } from 'react';
import Slider from "react-slick";
import sliderData from '../mocks/en-us/featured-banners.json';
import productCategoriesData from '../mocks/en-us/featured-products.json';
import { sliderBannersSettings, sliderProductsSettings } from '../utils/constants.js';

class Home extends Component {
    render() {
        const sliderLayoutItems = sliderData.results.map((item) => {
            return (
                <div>
                    <img src={item.data.main_image.url} alt={item.data.main_image.alt} className="wz-slider-item-image"/>
                    <h3 className="center">{item.data.title}</h3>
                </div>
            )
        });

        const productSliderItems = productCategoriesData.results.map((item) => {
            return (
                <div>
                    <img src={item.data.mainimage.url} alt={item.data.mainimage.alt} className="wz-slider-product-item-image"/>
                </div>
            )
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
            </section>
        );
    }
}

export default Home;