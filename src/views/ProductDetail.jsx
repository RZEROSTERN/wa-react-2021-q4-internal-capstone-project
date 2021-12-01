import { useParams } from 'react-router-dom';
import SliderProductDetailsImages from '../components/sliders/SliderProductDetailsImages';
import { useDetailedProduct } from '../utils/hooks/useDetailedProduct';

const ProductDetail = () => {
    const {id} = useParams()
    const {data, isLoading} = useDetailedProduct(id)
    console.log(data, isLoading)
    const product = (!isLoading) ? data.results[0] : null

    const tags = (!isLoading) ? product.tags.map((item) => {
        return (<span className="wz-chip" key={"chip-" + item}>{item}</span>)
    }) : []

    const specs = (!isLoading) ? product.data.specs.map((item) => {
        return (<div key={"item-" + item.spec_name}><dt>{item.spec_name}</dt><dd>{item.spec_value}</dd></div>)
    }) : []

    return (product !== null) ? (
        <div className="wz-container">
            <h1>{product.data.name}</h1>
            <div className="wz-halfs">
                <SliderProductDetailsImages images={product.data.images}/>
            </div>
            <div className="wz-halfs">
                <h3>SKU {product.data.sku}</h3>
                <div className="chips-container">
                    {tags}
                </div>
                <p>{product.data.description[0].text}</p>

                <dl>{specs}</dl>

                <h2>$ {product.data.price}</h2>
                <h4>Category: {product.data.category.slug}</h4>

                <h4>How many you want?</h4>
                <form>
                    <input type="text" name="items-to-buy" />
                    <button type="button">Add to cart</button>
                </form>
            </div>
        </div>
    ) : (
        <div className="wz-container">
            <h1>Please wait...</h1>
        </div>  
    )
}

export default ProductDetail