import "./article-item.css";
import MainTitle from "../../shared/MainTitle/MainTitle";
import ArticleItem from "../ArticleItem";
import Button from "../../shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { actArticleGeneralAsync } from "../../stores/Posts/action";
const ArticleList = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    list: posts,
    currentPage,
    totalPages,
  } = useSelector((state) => state.Post.ArticlePaging);

  const hasMore = currentPage < totalPages;

  function handleLoadMore() {
    if (loading) {
      return;
    }

    setLoading(true);
    const param = {
      currentPage: currentPage + 1,
    };
    dispatch(actArticleGeneralAsync(param)).then(() => {
      setLoading(false);
    });
  }

  return (
    <>
      <div className="articles-list section">
        <div className="tcl-container">
          {/* Main Title */}
          <MainTitle
            btnProps={{
              type: "default",
            }}
            btnLabel="view more"
          >
            Tieu de thu ba
          </MainTitle>
          {/* End Main Title */}

          {/* End Row News List */}
          <div className="tcl-row">
            {posts.map((item) => {
              return (
                <div className="tcl-col-12 tcl-col-md-6" key={item.id}>
                  <ArticleItem styleCard isShowAvatar={false} post={item} />
                </div>
              );
            })}
          </div>
          {/* End Row News List */}
          {/* Btn Loadmore */}

          {hasMore && (
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
          )}
        </div>
      </div>
    </>
  );
};

export default ArticleList;
