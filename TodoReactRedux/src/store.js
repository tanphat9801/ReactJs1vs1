import { createStore } from 'redux'
// import { ActCloseForm, ActOpenForm, ActToggleForm, ActSort } from "./actions/action"
import AppReducer from './reducer/index';


const store = createStore(
    AppReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// console.log( "init", store.getState());
store.subscribe(() => {
  console.log(store.getState())
});

export default store;











































// //CLOSE_FORM
// store.dispatch(ActCloseForm());
// console.log("CLOSE_FORM", store.getState() ); //false 

// //OPEN_FORM 
// store.dispatch(ActOpenForm());
// console.log("OPEN_FORM", store.getState() ); // true

// //TOGGLE_FORM 
// store.dispatch(ActToggleForm());
// console.log("TOGGLE_FORM", store.getState() ); // false

// //CHANGE SORT 
// store.dispatch(ActSort("level", "desc"));
// console.log("SORT_ITEMS", store.getState() );






//appreducer dong vai tro la mot reducer se co hai gia tri state va action 
// state duoc gan voi bien chua cac state can xu ly
//getstate lay ra nhung state co trong store

//=>> store se chua nhung state mac dinh 

//=>> action => store => appreducer => new state 

//dispath goi den store 

// subcribe khi store thay doi thi no se cap nhat lai 