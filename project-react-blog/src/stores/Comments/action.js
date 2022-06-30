import { mappingCommentsData } from "../../Helper";
import CommentService from "../../services/comments";
import { actIncreaseCommentCount } from "../Posts/action";

//action type
export const ACT_FETCH_COMMENTS_DETAIL = "ACT_FETCH_COMMENTS_DETAIL";
export const ACT_INIT_CHILDREN_PAGING = "ACT_INIT_CHILDREN_PAGING";
export const ACT_FETCH_CHILD_REPLY = "ACT_FETCH_CHILD_REPLY";
export const ACT_POST_NEW_COMMENT = "ACT_POST_NEW_COMMENT";
export const ACT_NEW_REPLY_COMMENT = "ACT_NEW_REPLY_COMMENT";

// action sync

export function actFetchComment({
  total,
  totalPages,
  comments,
  currentPage,
  parentId,
}) {
  return {
    type: parentId === 0 ? ACT_FETCH_COMMENTS_DETAIL : ACT_FETCH_CHILD_REPLY,
    payload: {
      total,
      totalPages,
      comments,
      currentPage,
      parentId,
    },
  };
}

export function actPostNewComment(comment) {
  return {
    type:
      comment.parentId.id === 0 ? ACT_POST_NEW_COMMENT : ACT_NEW_REPLY_COMMENT,
    payload: {
      comment,
    },
  };
}

// khởi tạo thêm 1 act để lấy thêm ds bình luận con dựa vào bình luận cha
export function actInitChildrenPaging(comments) {
  return {
    type: ACT_INIT_CHILDREN_PAGING,
    payload: {
      comments,
    },
  };
}

//action async
export function actFetchCommentsAsync({
  perPage = 2,
  currentPage = 1,
  parentId = 0,
  postId,
  exclude = [],
}) {
  return async (dispatch) => {
    try {
      if (!postId) {
        throw new Error("ivalid error");
      }
      const response = await CommentService.getList({
        perPage,
        currentPage,
        parentId,
        postId,
        exclude,
      });
      const total = Number(response.headers["x-wp-total"]);
      const totalPages = Number(response.headers["x-wp-totalpages"]);
      const comments = response.data.map(mappingCommentsData);

      if (parentId === 0) {
        dispatch(actInitChildrenPaging(comments));
      }

      dispatch(
        actFetchComment({
          total,
          totalPages,
          comments,
          currentPage,
          parentId,
        })
      );
      //khi có ds bình luận cha dispatch tiếp tục act này để lấy về 1 ds bình luận con
    } catch (error) {}
  };
}

//action create comments async

export function actFetchNewCommentsAsync({
  postId,
  parentId = 0,
  content,
  authorId,
}) {
  return async (dispatch) => {
    try {
      if (!authorId || !content || !postId) {
        throw new Error("ivalid data");
      }

      const response = await CommentService.createComment({
        postId,
        parentId,
        content,
        authorId,
      });

      const comment = mappingCommentsData(response.data);
      dispatch(actPostNewComment(comment));
      dispatch(actIncreaseCommentCount());
    } catch (error) {}
  };
}
