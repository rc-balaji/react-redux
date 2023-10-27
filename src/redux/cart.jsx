import {createStore} from 'redux'

const InitialState = {
    cart : []
}

const cartReducer = (state = InitialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          cart: [...state.cart, action.payload],
        };
      default:
        return state;
    }
  };



export const store = createStore(cartReducer)