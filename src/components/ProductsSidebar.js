import productCategoriesData from '../mocks/en-us/product-categories.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const ProductsSidebar = (props) => {
    const categories = productCategoriesData.results.map((item) => {
        const addItem = (newItem) => {
            if(props.productCategoryFilter.find(element => element === newItem) === undefined)
                props.setProductCategoryFilter(previousItems => [...previousItems, newItem]);
        };

        return (
            <div className="wz-sidebar-item" key={item.id}>
                <a href="/#" onClick={() => {  addItem(item.data.name) } }>{item.data.name}</a>
            </div>
        )
    });

    const chips = props.productCategoryFilter.map((chipItem) => {
        const handleRemoveItem = item => {
            props.setProductCategoryFilter(
                props.productCategoryFilter.filter(itemToRemove => itemToRemove !== item)
            )
        };

        return (
            <span className="wz-chip" 
                onClick={() => handleRemoveItem(chipItem)} 
                key={chipItem + "-chip"}>{chipItem} <FontAwesomeIcon icon={faTimesCircle} /></span>
        );
    });

    return (
        <div className={"categories-sidebar wz-mobile-hidden " + props.className}>
            <h1>Select a category</h1>
            <div className="wz-container chips-container">{chips}</div>
            {categories}
        </div>
    )
}

export default ProductsSidebar;