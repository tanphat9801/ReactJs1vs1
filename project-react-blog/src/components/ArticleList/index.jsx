import "./article-item.css";
import MainTitle from "../../shared/MainTitle/MainTitle";
import ArticleItem from "../ArticleItem";
import { usePostPaging } from "../../hooks/usePostPaging";
const ArticleList = () => {
  const { posts, renderButton } = usePostPaging();

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
          {renderButton()}
        </div>
      </div>
    </>
  );
};

export default ArticleList;
