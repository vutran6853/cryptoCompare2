import axios from 'axios';

//// Inital Value
const COINLIST = 'COINLIST';

//// Initial State
const initialState = {
  allCoinList: []
}

//// Initial Action Creator for Payload
export function getAllCoinData() {
  return {
      type: COINLIST,
      payload: axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
  }
}

//// Handle state changes
export default function cryptoReducer(state = initialState, action) {
  switch(action.type) {
    case `${ COINLIST }_FULFILLED`: 
    return {
        ...state,
        allCoinList: action.payload.data.Data
    }
    default:
    return state;
  }
}