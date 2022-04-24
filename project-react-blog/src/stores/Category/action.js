//action type

import { handleHashCategoryById } from "../../Helper";
import CategoriesServices from "../../services/categories";

export const ACT_ARTICLE_CATEGORY = "ACT_ARTICLE_CATEGORY";

//action sync

export function actArticleCategory(hashCategoryById) {
  return {
    type: ACT_ARTICLE_CATEGORY,
    payload: {
      hashCategoryById,
    },
  };
}

// action asynch

export function actArticleCategoryAsync() {
  return async (dispatch) => {
    try {
      const response = await CategoriesServices.getList();
      const categories = response.data;
      const hashCategoryById = handleHashCategoryById(categories);
      dispatch(actArticleCategory(hashCategoryById));
    } catch (error) {}
  };
}
