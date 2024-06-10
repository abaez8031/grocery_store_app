const ADD_TO_CART = "cart/ADD_TO_CART"
const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART"
const REMOVE_ONE_FROM_CART = "cart/REMOVE_ONE_FROM_CART"
const UPDATE_ITEM_COUNT = "cart/UPDATE_ITEM_COUNT"


export const addToCart = id => ({
  type: ADD_TO_CART,
  id
})

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  id
})

export const removeOneFromCart = id => ({
  type: REMOVE_ONE_FROM_CART,
  id
})

export const updateItemCount = (id, count) => ({
  type: UPDATE_ITEM_COUNT,
  id,
  count
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
    case REMOVE_ONE_FROM_CART:
      newState[action.id] = {id: action.id, count: newState[action.id].count - 1}
      if (newState[action.id].count <= 0) delete newState[action.id]
      return newState;
    case UPDATE_ITEM_COUNT:
      newState[action.id] = {id: action.id, count: action.count}
      if (newState[action.id].count <= 0) delete newState[action.id]
      return newState
    default:
      return state;
  }
}

export default cartReducer;