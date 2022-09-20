import { combineReducers } from "redux";


import coffee from './coffee'
import cart from './cart'

const rootReducer = combineReducers({
    cart,
    coffee
})

export default rootReducer;