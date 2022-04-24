import { mapingPostData } from "../../Helper";
import postService from "../../services/post";

//action type
export const ACT_ARTICLE_LATEST = "ACT_ARTICLE_LATEST";
export const ACT_ARTICLE_POPULAR = "ACT_ARTICLE_POPULAR";
export const ACT_ARTICLE_GENERAL = "ACT_ARTICLE_GENERAL";

//////////////////////////

//action creator latest
export function actArticleLatest(posts) {
  return {
    type: ACT_ARTICLE_LATEST,
    payload: {
      posts,
    },
  };
}

//action creator popular

export function actArticlePopular(posts) {
  return {
    type: ACT_ARTICLE_POPULAR,
    payload: {
      posts,
    },
  };
}

//actiom creator general

export function actArticleGeneral({ posts, currentPage, total, totalPages }) {
  return {
    type: ACT_ARTICLE_GENERAL,
    payload: {
      posts,
      currentPage,
      total,
      totalPages,
    },
  };
}

////////////////////////////////////////

// action async latest

export function actArticleLatestAsync() {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleLatest();
      const posts = response.data.map(mapingPostData);
      dispatch(actArticleLatest(posts));
    } catch (error) {
      //todo
    }
  };
}

// action async popular

export function actArticlePopularAsync() {
  return async (dispatch) => {
    try {
      const response = await postService.getArticlePopular();
      const posts = response.data.map(mapingPostData);
      dispatch(actArticlePopular(posts));
    } catch (error) {
      //todo
    }
  };
}

// action sync general

export function actArticleGeneralAsync({ currentPage = 1, perPage = 2 } = {}) {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleGeneral({
        currentPage,
        perPage,
      });
      const total = Number(response.headers["x-wp-total"]);
      const totalPages = Number(response.headers["x-wp-totalpages"]);
      const posts = response.data.map(mapingPostData);
      dispatch(actArticleGeneral({ posts, currentPage, total, totalPages }));
    } catch (error) {
      //todos
    }
  };
}
