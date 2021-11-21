import ProductsListContainer from '../components/ProductsListContainer';
import ProductsSidebar from '../components/ProductsSidebar';
import ProductsTopbarMobile from '../components/ProductsTopbarMobile';

const ProductsList = (props) => {
    return (
        <section id="products-list">
            <div id="mobile-layout" className="wz-mobile-shown">
                <ProductsTopbarMobile className="wz-mobile-full" />
                <ProductsListContainer className="wz-mobile-full" />
            </div>
            <div id="desktop-layout" className="wz-mobile-hidden wz-container-fluid">
                <ProductsSidebar className="wz-col wz-quarters" />
                <ProductsListContainer className="wz-three-quarters" />
            </div>
            
        </section>
    );
}

export default ProductsList;