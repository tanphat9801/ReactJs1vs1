import "./article-item.css";

const ArticleDesc = ({ shortHTMLDesc }) => {
  const shortDesc = shortHTMLDesc.replace("<p>", "").replace("</p>", "");

  let str = shortDesc.split(" ").slice(0, 20).join(" ");

  if (str !== shortDesc) {
    str += "...";
  }
  return (
    <>
      <p className="article-item__desc">{str}</p>
    </>
  );
};

export default ArticleDesc;
