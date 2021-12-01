const SliderProductItem = (props) => {
    return (!props.isDetail) ? (
        <div key={props.item.id}>
            <img src={props.item.data.main_image.url} alt={props.item.data.main_image.alt} className="wz-slider-product-item-image"/>
            <h3 className="wz-center">{props.item.data.name}</h3>
        </div>
    ) : (
        <div key={props.item.id}>
            <img src={props.item.url} alt={props.item.alt} className="wz-slider-product-item-image"/>
        </div>
    )
}

export default SliderProductItem;