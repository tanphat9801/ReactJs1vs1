import "./article-item.css"
import Button from "../../shared/Button/Button";
const ArticleCategory = () => {
    return ( 
        <>
                    <ul className="article-item__categories">
                        <li><Button type="category">News</Button></li>
                        <li><Button type="category">News</Button></li>
                    </ul>
        </>
     );
}
 
export default ArticleCategory;