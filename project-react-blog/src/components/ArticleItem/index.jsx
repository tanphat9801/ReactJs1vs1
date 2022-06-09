import "./article-item.css";
import cls from "classnames";
import ArticleThumbnail from "./ArticleThumbnail";
import ArticleTitle from "./ArticleTitle";
import ArticleCategory from "./ArticleCategories";
import ArticleDesc from "./ArticleDesc";
import ArticleItemInfo from "./ArticleInfo";
import ArticleStats from "./ArticleStarts";
import { genPostLink, genUserLink } from "../../Helper";

const ArticleItem = ({
  styleRow = false,
  styleCard = false,
  showDesc = false,
  showCategories = false,
  isShowAvatar = true,
  post,
}) => {
  const classes = cls("article-item", {
    "style-card": styleCard,
    "style-row": styleRow,
  });

  if (!post) {
    return null;
  }

  const {
    title,
    author,
    thumbnail,
    createDate,
    slug,
    authorId,
    categoriesId,
    viewCount,
    shortHTMLDesc,
  } = post;

  const slugLink = genPostLink(slug);
  const authorLink = genUserLink(authorId);

  return (
    <>
      <article className={classes}>
        <ArticleThumbnail
          thumbnail={thumbnail}
          slugLink={slugLink}
          title={title}
        />
        <div className="article-item__content">
          {showCategories && <ArticleCategory categoriesId={categoriesId} />}

          {showCategories && <ArticleStats viewCount={viewCount} />}

          <ArticleTitle title={title} slugLink={slugLink} />

          {showDesc && <ArticleDesc shortHTMLDesc={shortHTMLDesc} />}

          <ArticleItemInfo
            author={author}
            createDate={createDate}
            isShowAvatar={isShowAvatar}
            authorLink={authorLink}
          />
        </div>
      </article>
    </>
  );
};

export default ArticleItem;

//sluglink nguoi dung co the click tu 1 tam anh hoac title de den duoc bai viet
