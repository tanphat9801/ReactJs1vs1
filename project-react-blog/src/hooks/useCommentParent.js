import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchCommentsAsync } from "../stores/Comments/action";

const fnPostIdSelector = (state) =>
  state.Post.PostDetail && state.Post.PostDetail.id;

const fnParentPaging = (state) => state.Comments.commentParentPaging;

export const useCommentPaging = ({
  extraParam = {}, //co the truyen cac tham so khac vao de mo rong vd nhu la search
} = {}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const postId = useSelector(fnPostIdSelector);

  const {
    list: comments,
    currentPage,
    totalPages,
    total,
  } = useSelector(fnParentPaging);

  const hasMoreComments = currentPage < totalPages;

  const handleLoadMore = () => {
    if (loading) {
      return;
    }

    setLoading(true);
    const param = {
      currentPage: currentPage + 1,
      parent: 0,
      postId: postId,
      ...extraParam,
    };
    dispatch(actFetchCommentsAsync(param)).then(() => {
      setLoading(false);
    });
  };

  return {
    loading,
    comments,
    total,
    handleLoadMore,
    hasMoreComments,
    totalPages,
  };
};
