import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./css/post-detail.css";
import { genUserLink } from "../../Helper";
import { useState } from "react";
import Button from "../../shared/Button/Button";
import { actFetchNewCommentsAsync } from "../../stores/Comments/action";

const FormReply = ({ parentId }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const currUser = useSelector((state) => state.Auth.currentUser);
  const postId = useSelector((state) => state.Post.PostDetail?.id);

  const isThisParent = parentId === 0;
  const placeholder = isThisParent ? "Viết bình luận..." : "Nhập phản hồi...";
  const btnLabel = isThisParent ? "Bình luận" : "Phản hồi";

  if (!currUser && isThisParent) {
    return (
      <p>
        Bạn cần phải <Link to="/login">đăng nhập</Link> để bình luận bài viết
        này
      </p>
    );
  }

  const handleContentCmt = (e) => {
    setContent(e.target.value);
  };

  const handleSubmitComment = () => {
    if (loading) return;

    setLoading(true);
    dispatch(
      actFetchNewCommentsAsync({
        authorId: currUser.id,
        parentId,
        content,
        postId: postId,
      })
    ).then((res) => {
      setLoading(false);
      setContent("");
    });
  };

  return (
    <>
      <div className="comments__form">
        <div className="comments__form--control">
          <div className="comments__section--avatar">
            <Link to={genUserLink(currUser.id)}>
              <img src={currUser.avatar} alt={currUser.nickname} />
            </Link>
          </div>
          <textarea
            placeholder={placeholder}
            onChange={handleContentCmt}
            value={content}
          />
        </div>
        <div className="text-right">
          <Button onClick={handleSubmitComment} loading={loading}>
            {btnLabel}
          </Button>
        </div>
      </div>
    </>
  );
};

export default FormReply;
