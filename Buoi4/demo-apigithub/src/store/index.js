import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import reducer from "./reducer"

const middlewares = applyMiddleware(thunk)
const store = createStore(reducer, middlewares)

export default store;