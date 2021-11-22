import productsData from '../mocks/en-us/featured-products.json';
import Product from '../components/Product.js';
import Paginator from './Paginator.js';

const ProductsListContainer = (props) => {
    const paginator = (props.hasPaginator !== undefined) ? <Paginator /> : <span/>;

    const productsDataItems = productsData.results.map((item) => {
        let itemToAdd;

        if(props.productCategoryFilter === undefined) {
            itemToAdd = ( <Product itemData={item} key={item.id} /> );
        } else {
            if(props.productCategoryFilter.length > 0) {
                props.productCategoryFilter.forEach((value, index) => {
                    if(item.data.category.slug === value.toLowerCase()){
                        itemToAdd = ( <Product itemData={item} key={item.id} /> );
                    }
                })
            } else {
                itemToAdd = ( <Product itemData={item} key={item.id} /> );
            }
        }

        return itemToAdd;
    });

    return (
        <div className={"wz-container " + props.className}>
            <div className="wz-container" key="products-container">
                {productsDataItems}
            </div>
            {paginator}
        </div>
    )
    
    
}

export default ProductsListContainer;