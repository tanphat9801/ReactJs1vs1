import "./css/post-detail.css";
import "./css/comments.css";
import "./css/post-author.css";
import "./css/related-posts.css";
import { useSelector } from "react-redux";
import { formatRelativeDate } from "../../Helper/day";
import { Link } from "react-router-dom";
import { genUserLink } from "../../Helper";
const PostDetailHead = () => {
  const post = useSelector((state) => state.Post.PostDetail);

  if (!post) {
    return null;
  }

  const PostTilte = post.title;
  const PostAuthorId = post.authorId;
  const PostAuthorName = post.author.nickname;
  const PostCommentCount = post.commentcount;
  const PostViewCount = post.viewCount;

  const { dateFormatted } = formatRelativeDate(post.createDate);

  return (
    <>
      <div className="post-detail__head">
        <div className="tcl-container">
          <h1 className="post-detail__title">{PostTilte}</h1>
          <ul className="post-detail__info">
            <li className="item author">
              Bởi
              <Link to={genUserLink(PostAuthorId)}>
                <strong>{PostAuthorName}</strong>
              </Link>
            </li>
            <li className="item date">{dateFormatted}</li>
            <li className="item views">
              {PostViewCount}
              <i className="icons ion-ios-eye" />
            </li>
            <li className="item comments">
              {PostCommentCount}
              <i className="icons ion-ios-chatbubble" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PostDetailHead;
