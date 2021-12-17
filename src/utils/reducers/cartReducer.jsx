import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes.jsx';

const initialState = {
    products: [],
};

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                products: state.products.map(product =>
                product.id === action.id ? {...product, selected: true} : product,
                ),
            };
        
        case REMOVE_FROM_CART:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.id
                      ? {...product, selected: false, quantity: 1}
                      : product,
                ),
            };

        default: 
            return state
    }
}

export {cartReducer}