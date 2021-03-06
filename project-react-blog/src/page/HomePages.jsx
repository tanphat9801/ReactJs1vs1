import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";
import ArticleList from "../components/ArticleList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  actArticlesAsync,
  actArticleLatestAsync,
  actArticlePopularAsync,
} from "../stores/Posts/action";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actArticleLatestAsync());
    dispatch(actArticlePopularAsync());
    dispatch(actArticlesAsync());
  }, [dispatch]);
  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleList />
    </>
  );
};

export default HomePage;
