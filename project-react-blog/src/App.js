import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./page/HomePages";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./page/LoginPage/index";
import RegisterPage from "./page/RegisterPage";
import SearchPage from "./page/SearchPage/SearchPage";
import PostDetailPage from "./page/PostDetailPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actArticleCategoryAsync } from "./stores/Category/action";
import { actFetchAPIAsync } from "./stores/Auth/action";
import SearchCategory from "./page/SearchCategory/SearchCategory";
import { actMainMenuAsync } from "./stores/Menu/action";
import { ROUTER_POST } from "./constants";
import { actFetchTagsAsync } from "./stores/TagsPostDetail/action";
import SearchTags from "./page/SearchTags/SearchTags";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actArticleCategoryAsync());
    dispatch(actFetchAPIAsync());
    dispatch(actMainMenuAsync());
    dispatch(actFetchTagsAsync());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="wrapper-content">
        <Header />
        <Switch>
          <Route path={ROUTER_POST}>
            <PostDetailPage />
          </Route>
          <Route path="/tag/:slug">
            <SearchTags />
          </Route>
          <Route path="/category/:slug">
            <SearchCategory />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <div className="spacing"></div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
