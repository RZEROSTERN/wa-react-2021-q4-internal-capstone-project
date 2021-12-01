import Slider from "react-slick";
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";
import { sliderBannersSettings } from '../../utils/constants.js';
import SliderBannerItem from "../SliderBannerItem";

const SliderBanners = () => {
    const { data, isLoading } = useFeaturedBanners();

    const sliderLayoutItems = (!isLoading) ? data.results.map((item) => {
        return ( <SliderBannerItem item={item} key={item.id} /> );
    }) : [];

    return (
        <Slider {...sliderBannersSettings}>
            {sliderLayoutItems}
        </Slider>
    );
}

export default SliderBanners;