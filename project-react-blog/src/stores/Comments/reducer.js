import {
  ACT_INIT_CHILDREN_PAGING,
  ACT_FETCH_CHILD_REPLY,
  ACT_FETCH_COMMENTS_DETAIL,
  ACT_POST_NEW_COMMENT,
  ACT_NEW_REPLY_COMMENT,
} from "./action";

const initState = {
  commentParentPaging: {
    list: [],
    currentPage: 0,
    total: 0,
    totalPages: 0,
    exclude: [],
  },
  hasChildPaging: {},
};

const reducer = (commentsState = initState, action) => {
  let parentId;
  switch (action.type) {
    case ACT_NEW_REPLY_COMMENT:
      parentId = action.payload.comment.parentId;
      let currrentChildPaging = commentsState.hasChildPaging[parentId];
      if (!currrentChildPaging) {
        currrentChildPaging = {
          list: [],
          currentPage: 0,
          total: 0,
          totalPages: 1,
          exclude: [],
        }; // tai tao cau truc paging
      }
      return {
        ...commentsState,
        hasChildPaging: {
          [parentId]: {
            ...currrentChildPaging,
            list: [
              ...currrentChildPaging.list,
              action.payload.comment,
            ],
            exclude: [
              ...currrentChildPaging.exclude,
              action.payload.comment.id,
            ],
          },
        },
      };

    case ACT_POST_NEW_COMMENT:
      return {
        ...commentsState,
        commentParentPaging: {
          ...commentsState.commentParentPaging,
          list: [
            action.payload.comment,
            ...commentsState.commentParentPaging.list,
          ],
          exclude: [
            ...commentsState.commentParentPaging.exclude,
            action.payload.comment.id,
          ],
        },
      };
    case ACT_FETCH_CHILD_REPLY:
      parentId = action.payload.parentId;
      return {
        ...commentsState,
        hasChildPaging: {
          ...commentsState.hasChildPaging,
          [parentId]: {
            ...commentsState.hasChildPaging[parentId],
            list:
              action.payload.currentPage === 1
                ? action.payload.comments
                : [
                    ...commentsState.hasChildPaging[parentId].list,
                    ...action.payload.comments,
                  ],
            currentPage: action.payload.currentPage,
            total: action.payload.total,
            totalPages: action.payload.totalPages,
          },
        },
      };
    //bình luận cha
    case ACT_FETCH_COMMENTS_DETAIL:
      return {
        ...commentsState,
        commentParentPaging: {
          ...commentsState.commentParentPaging,
          list:
            action.payload.currentPage === 1
              ? action.payload.comments
              : [
                  ...commentsState.commentParentPaging.list,
                  ...action.payload.comments,
                ],
          currentPage: action.payload.currentPage,
          total: action.payload.total,
          totalPages: action.payload.totalPages,
        },
      };
    //bình luận con
    case ACT_INIT_CHILDREN_PAGING: {
      //input [{id: 20}, {id:30}] dựa vào id của bình luận cha
      //output: {id: paging} tái tạo lại từ 1 arr thành 1 obj sử dụng hàm reduce()
      return {
        ...commentsState,
        hasChildPaging: {
          ...commentsState.hasChildPaging, // copy lại toàn bộ giá trị cũ
          ...action.payload.comments.reduce((output, commentItem) => {
            if (commentItem.replyCount > 0) {
              output[commentItem.id] = {
                list: [],
                currentPage: 0,
                total: 0,
                totalPages: 1,
                exclude: [],
              };
            }
            return output;
          }, {}),
        },
      };
    }
    default:
      return commentsState;
  }
};

export default reducer;
