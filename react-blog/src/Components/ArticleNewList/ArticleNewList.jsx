import "./article-item.css";
import MainTitleSec from "../../shared/MainTitleSec";
import NewListCard from "./NewListCard";
import ButtonLoad from "../../shared/ButtonLoad";
const ArticleNewList = () => {
    return ( 
      <div className="articles-list section">
      <div className="tcl-container">
        <MainTitleSec/>
        <div className="tcl-row">
          <NewListCard/>
          <NewListCard/>
          <NewListCard/>
          <NewListCard/>
          <NewListCard/>
          <NewListCard/>
        </div>
        <ButtonLoad/>
      </div>
    </div>
     );
}
 
export default ArticleNewList;