import ArticleItem from "../ArticleItem";
import MainTitle from "../../shared/MainTitle/MainTitle";
import "./latest-news-list.css";
const ArticleLatest = () => {
  return (
    <>
      {/* Latest News */}
      <div className="latest-news section">
        <div className="tcl-container">
          {/* Main Title */}
          <MainTitle btnProps={{}} btnLabel=''>Tieu de thu nhat</MainTitle>
          {/* End Main Title */}
          {/* Latest News List */}
          <div className="latest-news__list spacing">
            <div className="latest-news__card">
              <ArticleItem />
            </div>
            <div className="latest-news__card">
              <ArticleItem />
            </div>
            <div className="latest-news__card">
              <ArticleItem />
            </div>
          </div>
          {/* End Latest News List */}
        </div>
      </div>
      {/* End Latest News */}
    </>
  );
};

export default ArticleLatest;
