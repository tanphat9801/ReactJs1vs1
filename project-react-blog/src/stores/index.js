import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import PostReducer from "./Posts/reducer";
import AuthReducer from "./Auth/reducer";
import CategoryReducer from "./Category/reducer";

const rootReducer = combineReducers({
  Post: PostReducer,
  Auth: AuthReducer,
  Category: CategoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
