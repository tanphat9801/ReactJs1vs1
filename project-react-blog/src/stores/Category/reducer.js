import { ACT_ARTICLE_CATEGORY } from "./action";

const initState = {
  hashCategoryById: {},
  hashTagsById: {},
  isFetch: false,
};

function reducer(stateCategory = initState, action) {
  switch (action.type) {
    case ACT_ARTICLE_CATEGORY:
      return {
        ...stateCategory,
        isFetch: true,
        hashCategoryById: action.payload.hashCategoryById,
      };
    default:
      return stateCategory;
  }
}

export default reducer;
