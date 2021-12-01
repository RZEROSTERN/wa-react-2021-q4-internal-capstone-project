import { Link } from "react-router-dom";

const Product = (props) => {
    return (
        <div className="wz-col wz-mobile-full wz-quarters wz-product">
            <img src={props.itemData.data.mainimage.url} alt={props.itemData.data.mainimage.alt} />
            <h4 className="wz-center">{props.itemData.data.name}</h4>
            <p className="wz-center">{props.itemData.data.category.slug}</p>
            <p className="wz-center">$ {props.itemData.data.price}</p>
            <div className="wz-purchase-options">
                <div className="wz-halfs wz-center">
                    <Link to="/">Add to cart</Link>
                </div>
                <div className="wz-halfs wz-center">
                    <Link to={"/product/" + props.itemData.id}>Product details</Link>
                </div>
            </div>
        </div>
    );
}

export default Product;