import "./article-item.css";
import cls from "classnames"
import ArticleThumbnail from "./Article-thumbnail";
import ArticleItemTitle from "./ArticleItemTitle";
import ArticleCategory from "./ArticleCategory";
import ArticleStats from "./ArticleItemStarts";
import ArticleDesc from "./ArticleDesc";
import ArticleItemInfo from "./ArticleItemInfo";

const ArticleItem = (
    {
        styleRow = false ,
        styleCard = false,
        showDesc = false,
        showCategories = false,
        isShowAvatar = true
    }
    ) => {

    const classes = cls('article-item',
    {
        'style-card' : styleCard,
        'style-row'  : styleRow
    })

    return ( 
        <>
        <article className={classes}>
                <ArticleThumbnail/>

                <div className="article-item__content">

                    {showCategories && <ArticleCategory/>}

                    {showCategories && <ArticleStats/>}

                    <ArticleItemTitle/>

                    {showDesc && <ArticleDesc/>}

                    <ArticleItemInfo  isShowAvatar={isShowAvatar}/>
                </div>
        </article>
        </>
     );
}
 
export default ArticleItem;