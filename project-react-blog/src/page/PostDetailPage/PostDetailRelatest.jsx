import { useSelector } from "react-redux";
import ArticleRelatest from "../../components/ArticleItem/AritcleRelatest";

const PostDetailRelatest = () => {
  const posts = useSelector((state) => state.Post.RelatestPostByAuthor);

  return (
    <>
      <div className="related-post">
        <h2 className="related-post__head">Bài viết liên quan</h2>
        {posts.map((post) => (
          <ArticleRelatest key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostDetailRelatest;
