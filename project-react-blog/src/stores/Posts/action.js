import { mapingPostData, mappingPostDetail } from "../../Helper";
import postService from "../../services/post";
import { actFetchCommentsAsync } from "../Comments/action";

//action type article
export const ACT_ARTICLE_LATEST = "ACT_ARTICLE_LATEST";
export const ACT_ARTICLE_POPULAR = "ACT_ARTICLE_POPULAR";
export const ACT_ARTICLES = "ACT_ARTICLES";

// action type postdetail

export const ACT_POST_DETAIL = "ACT_POST_DETAIL";
export const ACT_RELATEST_POST = "ACT_RELATEST_POST";
export const ACT_INCREASE_COMMENT_COUNT = "ACT_INCREASE_COMMENT_COUNT";

export function actIncreaseCommentCount() {
  return{
    type : ACT_INCREASE_COMMENT_COUNT,
  }
}

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

//action creator general

export function actFetchArticle({ posts, currentPage, total, totalPages }) {
  return {
    type: ACT_ARTICLES,
    payload: {
      posts,
      currentPage,
      total,
      totalPages,
    },
  };
}

//action postdetail
export const actPostDetail = (post) => {
  return {
    type: ACT_POST_DETAIL,
    payload: {
      post,
    },
  };
};

// action relatest

export const actRealatestPost = (posts) => {
  return {
    type: ACT_RELATEST_POST,
    payload: {
      posts,
    },
  };
};

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

export function actArticlesAsync({
  currentPage = 1,
  perPage = 2,
  ...restParams
} = {}) {
  return async (dispatch) => {
    try {
      // console.log("restParams", restParams);
      const response = await postService.getArticles({
        currentPage,
        perPage,
        ...restParams,
      }); //restparams sẽ phân rã các thuộc tính sau này có thể xây dựng thêm(vd là thuộc tính search)
      const total = Number(response.headers["x-wp-total"]);
      const totalPages = Number(response.headers["x-wp-totalpages"]);
      const posts = response.data.map(mapingPostData);
      dispatch(actFetchArticle({ posts, currentPage, total, totalPages }));
    } catch (error) {
      //todos
    }
  };
}
//actArticlesAsync được tái sử dụng ở nhiều nơi

//action post detail async

export const actPostDetailAsync = (slug) => {
  return async (dispatch) => {
    try {
      const response = await postService.getDetail(slug);
      const post = response.data[0];
      if (!post) {
        throw new Error("post not found");
      }

      const postId = post.id;
      const authorId = post.author;

      dispatch(actPostDetail(mappingPostDetail(post)));
      dispatch(actFetchCommentsAsync({ postId }));
      // dung chung gia tri postId, khong lien quan den ca action khac
      dispatch(actRelatestPostAsync({ postId, authorId }));
      return { ok: true };
    } catch (error) {
      return { ok: false };
    }
  };
};

//action relatest post async

export const actRelatestPostAsync = ({ postId, authorId }) => {
  return async (dispatch) => {
    try {
      const response = await postService.getList({
        author: authorId,
        exclude: postId,
        per_page: 3,
      });
      const posts = response.data.map(mapingPostData);
      dispatch(actRealatestPost(posts));
    } catch (error) {}
  };
};
