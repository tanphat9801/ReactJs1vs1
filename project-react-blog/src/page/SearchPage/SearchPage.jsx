import ArticleItem from "../../components/ArticleItem";
import { getQueryStr } from "../../Helper";
import Button from "../../shared/Button/Button";
import MainTitle from "../../shared/MainTitle/MainTitle";
const SearchPage = () => {

  const queryStr = getQueryStr("q")

  return (
    <>
      <div className="articles-list section">
        <div className="tcl-container">
          <MainTitle type="search" btnProps={{}} btnLabel=''>10 ket qua tim kiem voi "{ queryStr }"</MainTitle>
          <div className="tcl-row tcl-jc-center">
            <div className="tcl-col-12 tcl-col-md-8">
              <ArticleItem
                styleCard
                showCategories
                isShowAvatar={false}
                showDesc={false}
              />
            </div>
            <div className="tcl-col-12 tcl-col-md-8">
              <ArticleItem
                styleCard
                showCategories
                isShowAvatar={false}
                showDesc={false}
              />
            </div>
            <div className="tcl-col-12 tcl-col-md-8">
              <ArticleItem
                styleCard
                showCategories
                isShowAvatar={false}
                showDesc={false}
              />
            </div>
            <div className="tcl-col-12 tcl-col-md-8">
              <ArticleItem
                styleCard
                showCategories
                isShowAvatar={false}
                showDesc={false}
              />
            </div>
          </div>
          {/* End Row News List */}

          {/* Btn Loadmore */}
          <div className="text-center">
            <Button type="primary" size="large">
              Tai them{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
