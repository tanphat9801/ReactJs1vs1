import { Link } from "react-router-dom";
import { DEFAULT_AVATAR } from "../../constants";
import "./article-item.css";

const ArticleAvatar = ({ avatar, authorLink, nickname }) => {
  return (
    <>
      <div className="article-item__author-image">
        <Link aria-label={nickname} to={authorLink}>
          <img src={avatar || DEFAULT_AVATAR} alt={nickname} />
        </Link>
      </div>
    </>
  );
};

export default ArticleAvatar;
