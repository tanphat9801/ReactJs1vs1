import CommentAction from "./CommentAction";
import CommentItemChild from "./CommentItemChild";
import "./css/post-detail.css";
import FormReply from "./FormReply";

const CommentsItem = (props) => {
  const parentId = props.parentId === 0;

  return (
    <>
      <li className="item">
        <CommentItemChild comment={props.comment} />
        {/* {reply comments} */}
        {parentId && false && (
          <ul className="comments">
            <CommentsItem parentId={5555} />
            <CommentsItem parentId={4444} />
          </ul>
        )}

        {parentId && <CommentAction count={20} />}

        {/* reply form  */}
        {parentId && false && <FormReply />}
      </li>
    </>
  );
};

export default CommentsItem;
