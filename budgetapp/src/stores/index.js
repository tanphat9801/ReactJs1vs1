import reducer from "./reducer";
import { createStore } from 'redux'


const store = createStore(reducer);
// console.log("check store", store);
export default store;