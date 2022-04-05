import "./popular-news-list.css";
import "./article-item.css";
import ArticleItem from "../ArticleItem";
import MainTitle from "../../shared/MainTitle/MainTitle";

const ArticlePopular = () => {
  return (
    <>
      {/* Popular News Section */}
      <div className="popular-news section bg-white-blue">
        <div className="tcl-container">
          {/* Main Title */}
          <MainTitle btnProps={{ type: "default" }} btnLabel="View more">
            Tieu de thu hai
          </MainTitle>
          {/* End Main Title */}

          <div className="popular-news__list spacing">
            <div className="popular-news__list--left">
              <div className="popular-news__list--row">
                {/* Popular news card */}
                <div className="popular-news__list--card">
                  <ArticleItem styleCard showDesc showCategories />
                </div>
                {/* End Popular news card */}
                {/* Popular news card */}
                <div className="popular-news__list--card">
                  <ArticleItem styleCard showDesc showCategories />
                </div>
                {/* End Popular news card */}
              </div>
            </div>
            <div className="popular-news__list--right">
              <div className="popular-news__list--row">
                {/* Popular news card */}
                <div className="popular-news__list--card">
                  <ArticleItem styleCard styleRow showDesc showCategories />
                </div>
                {/* End Popular news card */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Popular News Section */}
    </>
  );
};

export default ArticlePopular;
