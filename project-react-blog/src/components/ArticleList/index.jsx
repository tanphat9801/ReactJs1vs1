import "./article-item.css";
import MainTitle from "../../shared/MainTitle/MainTitle";
import ArticleItem from "../ArticleItem";
import Button from "../../shared/Button/Button";
const ArticleList = () => {
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
            <div className="tcl-col-12 tcl-col-md-6">
              <ArticleItem styleCard isShowAvatar={false} />
            </div>

            <div className="tcl-col-12 tcl-col-md-6">
              <ArticleItem styleCard isShowAvatar={false} />
            </div>

            <div className="tcl-col-12 tcl-col-md-6">
              <ArticleItem styleCard isShowAvatar={false} />
            </div>

            <div className="tcl-col-12 tcl-col-md-6">
              <ArticleItem styleCard isShowAvatar={false} />
            </div>

            <div className="tcl-col-12 tcl-col-md-6">
              <ArticleItem styleCard isShowAvatar={false} />
            </div>

            <div className="tcl-col-12 tcl-col-md-6">
              <ArticleItem styleCard isShowAvatar={false} />
            </div>
          </div>
          {/* End Row News List */}
          {/* Btn Loadmore */}
          <div className="text-center">
            <Button type='primary' size='large' loading>Load more</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleList;
