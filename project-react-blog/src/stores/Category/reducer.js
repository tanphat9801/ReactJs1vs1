import { ACT_ARTICLE_CATEGORY } from "./action";

const initState = {
  hashCategoryById: {},
};

function reducer(stateCategory = initState, action) {
  switch (action.type) {
    case ACT_ARTICLE_CATEGORY:
      return {
        ...stateCategory,
        hashCategoryById: action.payload.hashCategoryById,
      };
    default:
      return stateCategory;
  }
}

export default reducer;
