import produceData from "../mockData/produce.json"
const POPULATE = "produce/POPULATE"
const TOGGLE_LIKED = "produce/TOGGLE_LIKED"

export const toggleLiked = id => ({
  type: TOGGLE_LIKED,
  id
})

export const populateProduce = () => ({
  type: POPULATE,
  produce: produceData
})

const produceReducer = (state={}, action) => {
  const newState = {...state}
  switch(action.type) {
    case POPULATE:
      action.produce.forEach((produce) => {
        newState[produce.id] = produce
      })
      return newState;
    case TOGGLE_LIKED:
      newState[action.id] = {...newState[action.id], liked: !newState[action.id].liked}
      return newState;
    default: 
    return state
}
}

export default produceReducer;