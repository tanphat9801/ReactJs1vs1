import { Link } from "react-router-dom";
import { genUserLink } from "../../Helper";
import { formatRelativeDate } from "../../Helper/day";

const CommentItemChild = ({ comment, replyClick }) => {
  const { authorAvatar, authorId, authorName, contentHTML, createDate } =
    comment;
  const { dateRelative, dateFormatted } = formatRelativeDate(createDate, true);
  const authorLink = genUserLink(authorId);
  return (
    <>
      <div className="comments__section">
        <div className="comments__section--avatar">
          <Link to={authorLink}>
            <img src={authorAvatar} alt={authorName} />
          </Link>
        </div>
        <div className="comments__section--content">
          <a href="/" className="comments__section--user">
            {authorName}
          </a>
          <p className="comments__section--time" title={dateRelative}>
            {dateFormatted}
          </p>
          <p
            className="comments__section--text"
            dangerouslySetInnerHTML={{ __html: contentHTML }}
          ></p>
          {comment.parentId === 0 && (
            <i
              className="ion-reply comments__section--reply"
              onClick={replyClick}
            ></i>
          )}
        </div>
      </div>
    </>
  );
};

export default CommentItemChild;
