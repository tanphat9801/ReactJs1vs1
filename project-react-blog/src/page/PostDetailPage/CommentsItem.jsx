import { useCommentPaging } from "../../hooks/useCommentParent";
import CommentAction from "./CommentAction";
import CommentItemChild from "./CommentItemChild";
import "./css/post-detail.css";
import FormReply from "./FormReply";

const CommentsItem = (props) => {
  const thisParentId = props.parentId === 0;

  const {
    comments: replyComment,
    handleLoadMore,
    loading,
  } = useCommentPaging({
    parentId: props.comment.id,
  });

  return (
    <>
      <li className="item">
        <CommentItemChild comment={props.comment} />
        {/* {reply comments} */}
        {thisParentId && replyComment && replyComment.length > 0 && (
          <ul className="comments">
            {replyComment.map((replyCmtItem) => {
              return (
                <CommentsItem
                  parentId={props.comment.id}
                  comment={replyCmtItem}
                />
              );
            })}
          </ul>
        )}

        {thisParentId && replyComment && props.comment.replyCount > 0 && (
          <CommentAction
            count={props.comment.replyCount - replyComment.length}
            onClick={handleLoadMore}
            loading={loading}
          />
        )}

        {/* reply form  */}
        {thisParentId && false && <FormReply />}
      </li>
    </>
  );
};

export default CommentsItem;
