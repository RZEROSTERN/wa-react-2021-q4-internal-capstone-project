import productsData from '../mocks/en-us/featured-products.json';
import Product from '../components/Product.js';

const ProductsListContainer = (props) => {
    const productsDataItems = productsData.results.map((item) => {
        return ( <Product itemData={item} key={item.id} /> );
    });

    return (
        <div className={"wz-container " + props.className}>
            <div className="wz-container" key="products-container">
                {productsDataItems}
            </div>
        </div>
    )
}

export default ProductsListContainer;