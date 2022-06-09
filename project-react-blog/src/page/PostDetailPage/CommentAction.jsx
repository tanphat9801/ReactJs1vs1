import "./css/post-detail.css";
import cls from "classnames";
import IconLoading from "../../shared/IconLoading";

const CommentAction = ({
  spacingTop,
  spacingBottom,
  count,
  parent,
  onClick,
  loading,
}) => {
  const classes = cls("comments__hidden", {
    "mt-1": spacingTop,
    "mb-1": spacingBottom,
    "pl-0": parent,
  });

  const label = parent ? `Xem thêm ${count} bình luận` : `${count} phản hồi`;

  if (count === 0) {
    return null;
  }

  const hanldeHideComments = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <>
      <div className={classes}>
        <a onClick={hanldeHideComments} href="/">
          <i className="icons ion-ios-undo" />
          {label}
          {loading && <IconLoading width="1em" />}
        </a>
      </div>
    </>
  );
};

export default CommentAction;
