import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import ArticleItem from "../../components/ArticleItem";
import { getQueryStr } from "../../Helper";
import { usePostPaging } from "../../hooks/usePostPaging";
import MainTitle from "../../shared/MainTitle/MainTitle";
import { actArticlesAsync } from "../../stores/Posts/action";
const SearchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryStr = getQueryStr("q", location);

  useEffect(() => {
    dispatch(
      actArticlesAsync({
        search: queryStr, //giá trị mới được thêm vào
      })
    );
  }, [queryStr, dispatch]);

  const { posts, total, renderButton } = usePostPaging({
    extraParam: {
      search: queryStr, // gia tri moi duoc mo rong them tu custom hook
    },
  });

  return (
    <>
      <div className="articles-list section">
        <div className="tcl-container">
          <MainTitle type="search" btnProps={{}} btnLabel="">
            {total} kết quả tìm kiếm với "{queryStr}"
          </MainTitle>
          <div className="tcl-row tcl-jc-center">
            {posts.map((postitem) => (
              <div className="tcl-col-12 tcl-col-md-8" key={postitem.id}>
                <ArticleItem
                  styleCard
                  showCategories
                  isShowAvatar={false}
                  showDesc={false}
                  post={postitem}
                />
              </div>
            ))}
          </div>
          {/* End Row News List */}

          {/* Btn Loadmore */}
          {renderButton()}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
