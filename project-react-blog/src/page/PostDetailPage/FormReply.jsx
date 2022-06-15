import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./css/post-detail.css";
import { genUserLink } from "../../Helper";
import { useState } from "react";

const FormReply = ({ parentId }) => {
  const isThisParent = parentId === 0;

  const [content, setContent] = useState("");
  const currUser = useSelector((state) => state.Auth.currentUser);
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
    console.log(e.target.value);
    setContent(e.target.value);
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
          <button className="btn btn-default">{btnLabel}</button>
        </div>
      </div>
    </>
  );
};

export default FormReply;
