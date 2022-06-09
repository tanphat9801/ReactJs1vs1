import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import PostReducer from "./Posts/reducer";
import AuthReducer from "./Auth/reducer";
import CategoryReducer from "./Category/reducer";
import logger from "redux-logger";
import MenuReducer from "./Menu/reducer";
import TagsReducer from "./TagsPostDetail/reducer";
import CommentsReducer from "./Comments/reducer";

const rootReducer = combineReducers({
  Post: PostReducer,
  Auth: AuthReducer,
  Category: CategoryReducer,
  Menu: MenuReducer,
  Tag: TagsReducer,
  Comments: CommentsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
