import "./article-item.css";
import "./Latestnew.css";
import ArticleItem from "../ArticleItem";
import MainTitle from "../../shared/MainTitle";
const ArticleLatest = () => {
    return ( 
        <div className="latest-news section">
            <div className="tcl-container">
                <MainTitle btnProps={{}} btnLabel=''>Tieu de thu nhat</MainTitle>
                <div className="latest-news__list spacing">

                    <div className="latest-news__card">
                    <ArticleItem/>
                    </div>

                    <div className="latest-news__card">
                    <ArticleItem/>
                    </div>

                    <div className="latest-news__card">
                    <ArticleItem/>
                    </div>
                </div>
            </div>
      </div>
     );
}
 
export default ArticleLatest;