import {
  ACT_ARTICLE_GENERAL,
  ACT_ARTICLE_LATEST,
  ACT_ARTICLE_POPULAR,
} from "./action";

const initState = {
  ArticleLatest: [],
  ArticlePopular: [],
  ArticlePaging: {
    list: [],
    currentPage: 1,
  },
};

function reducer(postState = initState, action) {
  switch (action.type) {
    case ACT_ARTICLE_GENERAL:
      return {
        ...postState,
        ArticlePaging: {
          ...postState.ArticlePaging,
          list:
            action.payload.currentPage === 1
              ? action.payload.posts
              : [...postState.ArticlePaging.list, ...action.payload.posts],
          currentPage: action.payload.currentPage,
          total: action.payload.total,
          totalPages: action.payload.totalPages
        },
      };
    case ACT_ARTICLE_LATEST:
      return {
        ...postState,
        ArticleLatest: action.payload.posts,
      };

    case ACT_ARTICLE_POPULAR:
      return {
        ...postState,
        ArticlePopular: action.payload.posts,
      };

    default:
      return postState;
  }
}

export default reducer;
