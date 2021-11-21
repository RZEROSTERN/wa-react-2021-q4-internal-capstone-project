const ProductsList = (props) => {
    return (
        <div className="wz-container wz-center">
            <h1>This is the Product List Page</h1>
            <button className="wz-btn-primary" onClick={() => props.setIsProductsList(false)}>View all products</button>
        </div>
    );
}

export default ProductsList;