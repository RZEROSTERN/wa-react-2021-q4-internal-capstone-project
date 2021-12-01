import { useParams } from 'react-router-dom';
import { useDetailedProduct } from '../utils/hooks/useDetailedProduct';

const ProductDetail = () => {
    const {id} = useParams()
    const {data, isLoading} = useDetailedProduct(id)
    console.log(data, isLoading)
    const product = (!isLoading) ? data.results[0] : null

    return (product !== null) ? (
        <div className="wz-container">
            <div>
                <h1>{product.data.name}</h1>
                <div className="wz-halfs"></div>
                <div className="wz-halfs">
                    <p>{product.data.description}</p>
                </div>
            </div>
        </div>
    ) : (
        <div className="wz-container">
            <h1>Please wait...</h1>
        </div>  
    )
}

export default ProductDetail