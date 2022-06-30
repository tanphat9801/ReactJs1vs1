import {
  ACT_ARTICLES,
  ACT_ARTICLE_LATEST,
  ACT_ARTICLE_POPULAR,
  ACT_INCREASE_COMMENT_COUNT,
  ACT_POST_DETAIL,
  ACT_RELATEST_POST,
} from "./action";

const initState = {
  ArticleLatest: [],
  ArticlePopular: [],
  ArticlePaging: {
    list: [],
    currentPage: 1,
  },
  PostDetail: null,
  RelatestPostByAuthor: [],
};

function reducer(postState = initState, action) {
  switch (action.type) {
    case ACT_INCREASE_COMMENT_COUNT:
      return {
        ...postState,
        PostDetail: {
          ...postState.PostDetail,
          commentcount: postState.PostDetail.commentcount + 1,
        },
      };
    case ACT_ARTICLES:
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
          totalPages: action.payload.totalPages,
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

    case ACT_POST_DETAIL:
      return {
        ...postState,
        PostDetail: action.payload.post,
      };
    case ACT_RELATEST_POST:
      return {
        ...postState,
        RelatestPostByAuthor: action.payload.posts,
      };
    default:
      return postState;
  }
}

export default reducer;
