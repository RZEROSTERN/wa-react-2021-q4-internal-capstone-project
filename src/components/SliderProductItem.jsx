const SliderProductItem = (props) => {
    return (
        <div key={props.item.id}>
            <img src={props.item.data.main_image.url} alt={props.item.data.main_image.alt} className="wz-slider-product-item-image"/>
            <h3 className="wz-center">{props.item.data.name}</h3>
        </div>
    )
}

export default SliderProductItem;