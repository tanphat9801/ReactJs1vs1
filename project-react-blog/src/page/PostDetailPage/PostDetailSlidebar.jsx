import "./css/post-detail.css";
import "./css/comments.css";
import "./css/post-author.css";
import "./css/related-posts.css";
import PostDetailAuthor from "./PostDetailAuthor";
import PostDetailRelatest from "./PostDetailRelatest";

const PostDetailSlidebar = () => {
  return (
    <>
      <div className="post-detail__side">
        <PostDetailAuthor />
        <div className="spacing" />
        <PostDetailRelatest />
      </div>
    </>
  );
};

export default PostDetailSlidebar;
