import "./article-item.css";
import { Link, useLocation } from "react-router-dom";
import { getQueryStr, highlightText } from "../../Helper";

const ArticleTitle = ({ title, slugLink }) => {
  const location = useLocation();
  const queryStr = getQueryStr("q", location);
  return (
    <>
      {queryStr ? (
        <h2 className="article-item__title">
          <Link to={slugLink}>
            <span
              dangerouslySetInnerHTML={{
                __html: highlightText(queryStr, title),//hai tham so ben trong ham 
              }}
            />
          </Link>
        </h2>
      ) : (
        <h2 className="article-item__title">
          <Link to={slugLink}>{title}</Link>
        </h2>
      )}
    </>
  );
};

export default ArticleTitle;


// dangerouslySetInnerHTML render html to jsx 