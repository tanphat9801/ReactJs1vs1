import { Link } from "react-router-dom";
import "./article-item.css";

const ArticleThumbnail = ({ thumbnail, slugLink, title }) => {
  return (
    <>
      <div className="article-item__thumbnail">
        <Link to={slugLink}>
          <img src={thumbnail} alt={title} />
        </Link>
      </div>
    </>
  );
};

export default ArticleThumbnail;
