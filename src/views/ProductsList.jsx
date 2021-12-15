import {useState} from 'react';
import ProductsListContainer from '../components/ProductsListContainer';
import ProductsSidebar from '../components/ProductsSidebar';

const ProductsList = (props) => {
    const [productCategoryFilter, setProductCategoryFilter] = useState([]);

    return (
        <section id="products-list">
            <div id="mobile-layout" className="wz-mobile-shown">
                <ProductsSidebar className="wz-col wz-full" 
                        productCategoryFilter={productCategoryFilter} setProductCategoryFilter={setProductCategoryFilter} />
                <ProductsListContainer className="wz-mobile-full" productCategoryFilter={productCategoryFilter} />
            </div>
            <div id="desktop-layout" className="wz-mobile-hidden wz-container-fluid">
                <ProductsSidebar className="wz-col wz-quarters" 
                    productCategoryFilter={productCategoryFilter} setProductCategoryFilter={setProductCategoryFilter} />
                <ProductsListContainer className="wz-three-quarters" productCategoryFilter={productCategoryFilter} hasPaginator/>
            </div>
        </section>
    );
}

export default ProductsList;