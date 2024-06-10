const ADD_TO_CART = "cart/ADD_TO_CART"
const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART"

export const addToCart = id => ({
  type: ADD_TO_CART,
  id
})

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  id
})

const cartReducer = (state= {}, action) => {
  const newState = {...state};
  switch(action.type) {
    case ADD_TO_CART:
      newState[action.id] = {id: action.id, count: newState[action.id] ? newState[action.id].count + 1 : 1}
      return newState;
    case REMOVE_FROM_CART:
      delete newState[action.id]
      return newState
    default:
      return state;
  }
}

export default cartReducer;