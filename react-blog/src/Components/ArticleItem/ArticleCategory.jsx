import "./article-item.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ArticleCategory = ({ categoryId }) => {
  const hashCategoryById = useSelector(
    (state) => state.Category.hashCategoryById
  );
  return (
    <>
      <ul className="article-item__categories">
        {categoryId.map((cateId) => {
          const category = hashCategoryById[cateId];
          if (!category) {
            return null;
          }
          return (
            <li>
              <Link className="btn category">{category.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ArticleCategory;
