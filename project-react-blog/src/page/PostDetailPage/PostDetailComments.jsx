import { useCommentPaging } from "../../hooks/useCommentParent";
import CommentAction from "./CommentAction";
import CommentsItem from "./CommentsItem";
import "./css/post-detail.css";
import FormReply from "./FormReply";

const handleMapComments = (commentItem) => (
  <CommentsItem
    parentId={commentItem.parentId}
    comment={commentItem}
    key={commentItem.id}
  />
);

const PostDetailComments = () => {
  const { total, comments, handleLoadMore, loading } = useCommentPaging();

  return (
    <>
      <div className="post-detail__comments">
        <FormReply parentId={0} />
        <p>{total} Bình luận</p>
        {comments.length > 0 && (
          <ul className="comments">{comments.map(handleMapComments)}</ul>
        )}
        <CommentAction
          parent={true}
          count={total - comments.length}
          spacingTop
          onClick={handleLoadMore}
          loading={loading}
        />
      </div>
    </>
  );
};

export default PostDetailComments;
