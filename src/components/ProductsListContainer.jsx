import Product from './Product.jsx';
import { useFeaturedProducts } from '../utils/hooks/useFeaturedProducts.jsx';
import Paginator from './Paginator.jsx';

const ProductsListContainer = (props) => {
    const { data, isLoading } = useFeaturedProducts();
    console.log(data, isLoading);

    const paginator = (props.hasPaginator) ? <Paginator /> : <span/>;
    const productsDataItems =  (!isLoading) ? data.results.map((item) => {
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
    }) : [];

    return (
        <div className={"wz-container " + props.className}>
            <div className="wz-container" key="products-container">
                {productsDataItems}
            </div>
            {paginator}
        </div>
    );
    
    
}

export default ProductsListContainer;