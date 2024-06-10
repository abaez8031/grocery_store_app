const ADD_TO_CART = "cart/ADD_TO_CART"

export const addToCart = id => ({
  type: ADD_TO_CART,
  id
})

const cartReducer = (state= {}, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      const newState = {...state};
      newState[action.id] = {id: action.id, count: newState[action.id] ? newState[action.id].count + 1 : 1}
      return newState;
    default:
      return state;
  }
}

export default cartReducer;