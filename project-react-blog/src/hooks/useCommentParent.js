import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchCommentsAsync } from "../stores/Comments/action";

const fnPostIdSelector = (state) =>
  state.Post.PostDetail && state.Post.PostDetail.id;

const fnParentPaging = (state) => state.Comments.commentParentPaging;

const childParentPaging = (state, parentId) =>
  state.Comments.hasChildPaging[parentId] || { list: [] }; // do bat dong bo trong js

export const useCommentPaging = ({ parentId = 0 } = {}) => {
  const dispatch = useDispatch();
  const postId = useSelector(fnPostIdSelector);

  const {
    list: comments,
    currentPage,
    totalPages,
    total: _total,
    exclude,
  } = useSelector((state) => {
    if (parentId === 0) {
      return fnParentPaging(state);
    }
    return childParentPaging(state, parentId);
  });

  const hasMoreComments = currentPage < totalPages;

  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    if (loading) {
      return;
    }

    setLoading(true);
    const param = {
      currentPage: currentPage + 1,
      parentId,
      postId,
      exclude,
    };
    dispatch(actFetchCommentsAsync(param)).then(() => {
      setLoading(false);
    });
  };

  return {
    loading,
    comments,
    total: _total + (exclude?.length || 0),
    handleLoadMore,
    hasMoreComments,
    totalPages,
  };
};
