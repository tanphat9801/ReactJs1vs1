import "./css/post-detail.css";
import Button from "../../shared/Button/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostDetailTags = ({ tagsId }) => {
  const hashPostDetail = useSelector((state) => state.Tag.hashTagsById);
  return (
    <div className="post-detail__tags">
      <h2>Tags</h2>
      <ul>
        {tagsId.map((id) => {
          const tagId = hashPostDetail[id];
          if (!tagId) {
            return null;
          }
          const TagSlugLink = "/tag/" + tagId.slug;
          return (
            <Link to={TagSlugLink} className="item" key={tagId.id}>
              <Button type="default">{tagId.name}</Button>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default PostDetailTags;
