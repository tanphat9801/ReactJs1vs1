import "./css/post-detail.css"
import "./css/comments.css"
import "./css/post-author.css"
import "./css/related-posts.css"
import PostDetailHead from "./PostDeatailHead";
import PostDetailContent from "./PostDetailContent";
import PostDetailSlidebar from "./PostDetailSlidebar";

const PostDetailPage = () => {
  return (
    <>
      <div>
        <main className="post-detail">
          <div className="spacing" />
          <PostDetailHead />

          <div className="spacing" />

          <div className="post-detail__fluid">
            <div className="tcl-container">
              <div className="post-detail__wrapper">
                <PostDetailContent />
                <PostDetailSlidebar />
              </div>
            </div>
          </div>
        </main>

        <div className="spacing" />
      </div>
    </>
  );
};

export default PostDetailPage;
