import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../shared/Button/Button";
import { actArticlesAsync } from "../stores/Posts/action";

export const usePostPaging = ({
     extraParam = {} //co the truyen cac tham so khac vao de mo rong vd nhu la search 
    } = {}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    list: posts,
    currentPage,
    totalPages,
    total,
  } = useSelector((state) => state.Post.ArticlePaging);

  const hasMore = currentPage < totalPages;

  const handleLoadMore = () => {
    if (loading) {
      return;
    }

    setLoading(true);
    const param = {
      currentPage: currentPage + 1,
      ...extraParam
    };
    dispatch(actArticlesAsync(param)).then(() => {
      setLoading(false);
    });
  };

  const renderButton = () => {
    return (
      hasMore && (
        <div className="text-center">
          <Button
            type="primary"
            onClick={handleLoadMore}
            size="large"
            loading={loading}
          >
            Load more
          </Button>
        </div>
      )
    );
  };

  return {
    posts,
    renderButton,
    total,
  };
};
