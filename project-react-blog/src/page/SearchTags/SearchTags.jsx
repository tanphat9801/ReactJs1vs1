import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ArticleItem from "../../components/ArticleItem";
import { PageNotFound } from "../../components/PageNotFound/PageNotFound";
import { usePostPaging } from "../../hooks/usePostPaging";
import CircularIndeterminate from "../../shared/CircularLoading/CircularLoading";
import MainTitle from "../../shared/MainTitle/MainTitle";
import { actArticlesAsync } from "../../stores/Posts/action";

const SearchTags = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(undefined);
  const isFetchTag = useSelector((state) => state.Category.isFetch);
  const hashCategoryId = useSelector(
    (state) => state.Category.hashCategoryById
  );
  const { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    if (isFetchTag) {
      const TagFoundId = Object.keys(hashCategoryId).find(
        (tagId) =>
          hashCategoryId[tagId].slug === slug &&
          hashCategoryId[tagId].lang === "vi"
      );

      if (TagFoundId) {
        console.log("useeffect lay tag dua vao slug");
        setCategory(hashCategoryId[TagFoundId]);
      } else {
        setCategory(null);
      }
    }
  }, [isFetchTag, hashCategoryId, slug]);

  const { posts, total, renderButton } = usePostPaging({
    extraParam: {
      categories: category ? category.id : "",
    },
  });

  useEffect(() => {
    if (category) {
      console.log("get post category ");
      dispatch(
        actArticlesAsync({
          categories: category.id,
        })
      );
    }
  }, [dispatch, category]);

  if (category === undefined) {
    return <CircularIndeterminate />;
  }

  if (category === null) {
    return <PageNotFound />;
  }

  return (
    <>
      <div className="articles-list section">
        <div className="tcl-container">
          <MainTitle type="search" btnProps={{}} btnLabel="">
            {total} kết quả tìm kiếm với "{slug}"
          </MainTitle>
          <div className="tcl-row tcl-jc-center">
            {posts.map((tagItem) => {
              return (
                <div className="tcl-col-12 tcl-col-md-8" key={tagItem.id}>
                  <ArticleItem
                    styleCard
                    showCategories
                    isShowAvatar={false}
                    showDesc={false}
                    post={tagItem}
                  />
                </div>
              );
            })}
          </div>
          {/* End Row News List */}
          {renderButton()}
        </div>
      </div>
    </>
  );
};

export default SearchTags;
