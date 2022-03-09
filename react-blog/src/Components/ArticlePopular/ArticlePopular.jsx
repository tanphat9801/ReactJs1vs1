
import "./article-item.css"
import "./popular-news-list.css"
import MainTitle from "../../shared/MainTitle";
import ArticleItem from "../ArticleItem";
const ArticlePopular = () => {
    return ( 
      <div className="popular-news section bg-white-blue">
        <div className="tcl-container">
          
          {/* Main Title */}
          <MainTitle btnProps={{type: 'default',}} btnLabel='View more'>Tieu de thu hai</MainTitle>
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
                  <ArticleItem styleCard showDesc showCategories/>
                </div>
                {/* End Popular news card */}

              </div>
            </div>
            <div className="popular-news__list--right">
              <div className="popular-news__list--row">
                {/* Popular news card */}
                <div className="popular-news__list--card">
                  <ArticleItem styleCard styleRow showDesc showCategories/>
                </div>
                {/* End Popular news card */}
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default ArticlePopular;