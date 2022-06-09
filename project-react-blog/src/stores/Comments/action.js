import { mappingCommentsData } from "../../Helper";
import CommentService from "../../services/comments";

//action type
export const ACT_FETCH_COMMENTS_DETAIL = "ACT_FETCH_COMMENTS_DETAIL";
export const ACT_FETCH_CHILD_PAGING = "ACT_FETCH_CHILD_PAGING";

// action sync

export function actFetchComment({ total, totalPages, comments, currentPage }) {
  return {
    type: ACT_FETCH_COMMENTS_DETAIL,
    payload: {
      total,
      totalPages,
      comments,
      currentPage,
    },
  };
}

// khởi tạo thêm 1 act để lấy thêm ds bình luận con dựa vào bình luận cha
export function actFetchChildPaging({ comments }) {
  return {
    type: ACT_FETCH_CHILD_PAGING,
    payload: {
      comments,
    },
  };
}

//action async
export function actFetchCommentsAsync({
  perPage = 5,
  currentPage = 1,
  parentId = 0,
  postId,
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
      });
      const total = Number(response.headers["x-wp-total"]);
      const totalPages = Number(response.headers["x-wp-totalpages"]);
      const comments = response.data.map(mappingCommentsData);
      dispatch(
        actFetchComment({
          total,
          totalPages,
          comments,
          currentPage,
        })
      );

      //khi có ds bình luận cha dispatch tiếp tục act này để lấy về 1 ds bình luận con
      if (parentId === 0) {
        dispatch(actFetchChildPaging({ comments }));
      }
    } catch (error) {}
  };
}
