import Product from "./Product"

const SearchResultProductsListContainer = (props) => {
    const items = props.data.results.map((item) => {
        return (
            <Product itemData={item} key={item.id} />
        )
    })

    return (
        <div className="wz-container" key="products-container">
            {items}
        </div>
    )
}

export default SearchResultProductsListContainer