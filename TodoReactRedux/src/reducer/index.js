import { combineReducers } from "redux";
import isShowForm from "./isShowForm";
import sort from "./sort";
import items from "./items";

// let defaultState = {

//     items       : [],
//     isShowForm  : false,
//     strSearch   : '',
//     sort : {orderBy : "name", orderDir : "asc"},
//     itemSelected: null

// }


const AppReducer = combineReducers({
    isShowForm ,
    sort,
    items
})


export default AppReducer;