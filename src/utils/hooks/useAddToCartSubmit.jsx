import { useReducer, useState } from 'react'
import { cartReducer } from '../reducers/cartReducer';

const useAddToCartSubmit = (itemsInput, id) => {
    const [cartContents, setCartContents] = useState()
    const [state, dispatch] = useReducer(cartReducer);

    const handleChange = (event) => {
        const {value} = event.target
        setCartContents({...cartContents, [id]: {items: value.trim()}})
    }

    const handleClick = () => {
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
        nativeInputValueSetter.call(itemsInput.current, ` ${itemsInput.current.value}`);
        
        var event = new Event('input', { bubbles: true });
        itemsInput.current.dispatchEvent(event);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return {handleChange, handleSubmit, handleClick}
}

export default useAddToCartSubmit