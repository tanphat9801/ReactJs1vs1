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
    //b??nh lu???n cha
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
    //b??nh lu???n con
    case ACT_INIT_CHILDREN_PAGING: {
      //input [{id: 20}, {id:30}] d???a v??o id c???a b??nh lu???n cha
      //output: {id: paging} t??i t???o l???i t??? 1 arr th??nh 1 obj s??? d???ng h??m reduce()
      return {
        ...commentsState,
        hasChildPaging: {
          ...commentsState.hasChildPaging, // copy l???i to??n b??? gi?? tr??? c??
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
