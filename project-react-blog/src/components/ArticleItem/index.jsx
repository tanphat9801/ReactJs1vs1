import "./article-item.css";
import cls from "classnames";
import ArticleThumbnail from "./ArticleThumbnail";
import ArticleTitle from "./ArticleTitle";
import ArticleCategory from "./ArticleCategories";
import ArticleDesc from "./ArticleDesc";
import ArticleItemInfo from "./ArticleInfo";
import ArticleStats from "./ArticleStarts";

const ArticleItem = ({
  styleRow = false,
  styleCard = false,
  showDesc = false,
  showCategories = false,
  isShowAvatar = true,
}) => {
  const classes = cls("article-item", {
    "style-card": styleCard,
    "style-row": styleRow,
  });

  return (
    <>
      <article className={classes}>
        <ArticleThumbnail />
        <div className="article-item__content">
          {showCategories && <ArticleCategory />}

          {showCategories && <ArticleStats />}

          <ArticleTitle />

          {showDesc && <ArticleDesc />}

          <ArticleItemInfo isShowAvatar={isShowAvatar} />
        </div>
      </article>
    </>
  );
};

export default ArticleItem;
