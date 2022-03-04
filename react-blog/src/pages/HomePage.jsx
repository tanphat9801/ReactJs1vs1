import ArticleLatest from "../components/Articlelatest/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular/ArticlePopular";
import ArticleNewList from "../components/ArticleNewList/ArticleNewList";
const HomePage = () => {
    return ( 
        <>
            <ArticleLatest/>
            <ArticlePopular/>
            <ArticleNewList/>
        </>
     );
}
 
export default HomePage;