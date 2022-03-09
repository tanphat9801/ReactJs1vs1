import "./article-item.css"

const ArticleAvatar = () => {
    return ( 
        <>
            <div className="article-item__author-image">
                <a aria-label="John Doe" href="/">
                    <img src="assets/images/john-doe.png" alt="john-doe" />
                </a>
            </div>
        </>
     );
}
 
export default ArticleAvatar;