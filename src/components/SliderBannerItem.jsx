const SliderBannerItem = (props) => {
    return (
        <div key={props.item.id}>
            <img src={props.item.data.main_image.url} alt={props.item.data.main_image.alt} className="wz-slider-item-image"/>
            <h3 className="wz-center">{props.item.data.title}</h3>
        </div>
    )
}

export default SliderBannerItem;