import "./css/post-detail.css";
import "./css/comments.css";
import "./css/post-author.css";
import "./css/related-posts.css";
import PostDetailHead from "./PostDeatailHead";
import PostDetailContent from "./PostDetailContent";
import PostDetailSlidebar from "./PostDetailSlidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actPostDetailAsync } from "../../stores/Posts/action";
import LinearIndeterminate from "../../shared/LinearLoading/LinearLoading";
import { PageNotFound } from "../../components/PageNotFound/PageNotFound";

const PostDetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const slug = params.slug;
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    dispatch(actPostDetailAsync(slug)).then((res) => {
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    });
  }, [slug, dispatch]);

  if (status === "loading") {
    return <LinearIndeterminate />;
  }

  if (status === "error") {
    return <PageNotFound />;
  }

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
