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

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(actArticleCategoryAsync())
  },[dispatch]);
  return (
    <BrowserRouter>
      <div className="wrapper-content">
        <Header />
        <Switch>
          <Route path="/post/:slug">
            <PostDetailPage />
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
