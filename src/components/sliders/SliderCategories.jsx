import Slider from "react-slick"
import { sliderProductsSettings } from "../../utils/constants"
import { useCategories } from "../../utils/hooks/useCategories"
import SliderProductItem from "../SliderProductItem.jsx"

const SliderCategories = () => {
    const { data, isLoading } = useCategories()
    console.log(data, isLoading);

    const productSliderItems = (!isLoading) ? data.results.map((item) => {
        return ( <SliderProductItem item={item} key={item.id} /> );
    }) : [];

    return (
        <Slider {...sliderProductsSettings}>
            {productSliderItems}
        </Slider>
    )
}

export default SliderCategories