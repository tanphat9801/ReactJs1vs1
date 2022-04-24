import "./article-item.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ArticleCategory = ({ categoriesId }) => {
  const hashCategoryById = useSelector(
    (state) => state.Category.hashCategoryById
  );
  return (
    <>
      <ul className="article-item__categories">
        {categoriesId.map((cateId) => {
          const category = hashCategoryById[cateId];
          const sluglinkCategory = "/category/" + category.slug;
          if (!category) {
            return null;
          }
          return (
            <li key={cateId}>
              <Link to={sluglinkCategory} className="btn btn-category">
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ArticleCategory;
