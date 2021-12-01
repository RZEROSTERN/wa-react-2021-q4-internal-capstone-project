import Slider from "react-slick"
import { sliderProductDetailsSettings } from "../../utils/constants"
import SliderProductItem from "../SliderProductItem";


const SliderProductDetailsImages = ({images}) => {
    const productDetailsSliderItems = images.map((item, value) => {
        return ( <SliderProductItem item={item.image} key={value} isDetail={true}/> );
    })

    return (
        <Slider {...sliderProductDetailsSettings}>
            {productDetailsSliderItems}
        </Slider>
    )
}

export default SliderProductDetailsImages