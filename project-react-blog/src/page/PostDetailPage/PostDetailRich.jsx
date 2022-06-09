import "./css/post-detail.css";

const PostDetailRich = ({ content }) => {
  return (
    <>
      <div className="rte" dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};

export default PostDetailRich;
