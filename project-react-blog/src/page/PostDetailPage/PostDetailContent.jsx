import "./css/post-detail.css";
import "./css/comments.css";
import "./css/post-author.css";
import "./css/related-posts.css";

import PostDetailTags from "./PostDetailTags";
import PostDetailRich from "./PostDetailRich";
import PostDetailComments from "./PostDetailComments";
import { useSelector } from "react-redux";

const PostDetailContent = () => {
  const post = useSelector((state) => state.Post.PostDetail);
  const postId = post.tagsId;
  return (
    <>
      <div className="post-detail__content">
        <div className="thumbnail">
          <img src={post.thumbnail} alt="blog-title" />
        </div>
        <div className="content-padding">
          <PostDetailRich content={post.contentHTML} />
          <PostDetailTags tagsId={postId} />
          <PostDetailComments />
        </div>
      </div>
    </>
  );
};

export default PostDetailContent;
