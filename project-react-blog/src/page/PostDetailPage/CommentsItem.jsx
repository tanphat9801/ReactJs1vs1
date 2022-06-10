import { useCommentPaging } from "../../hooks/useCommentParent";
import CommentAction from "./CommentAction";
import CommentItemChild from "./CommentItemChild";
import "./css/post-detail.css";
import FormReply from "./FormReply";

const CommentsItem = (props) => {
  const thisParentId = props.parentId === 0;

  const { comments: replyComment, handleLoadMore } = useCommentPaging({
    parentId: props.comment.id,
  });

  return (
    <>
      <li className="item">
        <CommentItemChild comment={props.comment} />
        {/* {reply comments} */}
        {thisParentId && false && (
          <ul className="comments">
            <CommentsItem parentId={5555} />
            <CommentsItem parentId={4444} />
          </ul>
        )}

        {thisParentId && props.comment.replyCount > 0 && (
          <CommentAction
            count={props.comment.replyCount}
            onClick={handleLoadMore}
          />
        )}

        {/* reply form  */}
        {thisParentId && false && <FormReply />}
      </li>
    </>
  );
};

export default CommentsItem;
