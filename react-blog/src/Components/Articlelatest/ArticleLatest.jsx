import "./article-item.css";
import "./Latestnew.css";
import LastCard from "./LastCard";
import MainTitle from "../../shared/MainTitle";
const ArticleLatest = () => {
    return ( 
        <div className="latest-news section">
            <div className="tcl-container">
                <MainTitle/>
                <div className="latest-news__list spacing">
                    <LastCard/>
                    <LastCard/>
                    <LastCard/>
                </div>
            </div>
      </div>
     );
}
 
export default ArticleLatest;