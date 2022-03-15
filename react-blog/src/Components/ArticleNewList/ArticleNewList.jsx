import "./article-item.css";
import MainTitle from "../../shared/MainTitle"
import ArticleItem from "../ArticleItem";
import Button from "../../shared/Button";
const ArticleNewList = () => {
    return ( 
      <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle
             btnProps={{
             type :'default',
            }}
             btnLabel='view more'>
              Tieu de thu ba
          </MainTitle>
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
          <div className="text-center">
            <Button type='primary' size='large' loading>Load more</Button>
          </div>
      </div>
    </div>
     );
}
 
export default ArticleNewList;