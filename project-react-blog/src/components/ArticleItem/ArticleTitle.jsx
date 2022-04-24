import "./article-item.css";
import { Link } from "react-router-dom";

const ArticleTitle = ({ title, slugLink }) => {
  return (
    <>
      <h2 className="article-item__title">
        <Link to={slugLink}>{title}</Link>
      </h2>
    </>
  );
};

export default ArticleTitle;
