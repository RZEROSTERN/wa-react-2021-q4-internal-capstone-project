export const cartReducer = (state, action) => {
    switch(action.type) {
        case "added_to_cart":
            return {
                ...state, cartContents: state.cartContents
            }

        default:
            return state
    }
}

export const initialState = {
    cartContents: []
}