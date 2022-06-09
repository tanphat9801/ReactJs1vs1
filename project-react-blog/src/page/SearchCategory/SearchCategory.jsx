import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainTitle from "../../shared/MainTitle/MainTitle";

import ArticleItem from "../../components/ArticleItem";
import { PageNotFound } from "../../components/PageNotFound/PageNotFound";
import LinearIndeterminate from "../../shared/LinearLoading/LinearLoading";
import { actArticlesAsync } from "../../stores/Posts/action";
import { usePostPaging } from "../../hooks/usePostPaging";

const SearchCategory = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [category, setCategory] = useState(undefined);
  const isFetchCategories = useSelector((state) => state.Category.isFetch);
  const hashCategories = useSelector(
    (state) => state.Category.hashCategoryById
  );

  // console.log(isFetchCategories, hashCategories);
  // console.log("slug", slug);

  useEffect(() => {
    if (isFetchCategories) {
      // thuat toan xu ly
      const isFound = Object.keys(hashCategories).find(
        (categoryId) =>
          // const categoryValue = hashCategories[categoryId];
          hashCategories[categoryId].slug === slug &&
          hashCategories[categoryId].lang === "vi"
      );
      if (isFound) {
        setCategory(hashCategories[isFound]);
      } else {
        setCategory(null);
      }
    }
  }, [isFetchCategories, hashCategories, slug]);


  const { posts, total, renderButton } = usePostPaging({
    extraParam: {
      categories: category ? category.id : "", // gia tri moi duoc mo rong them tu custom hook
    },
  });

  useEffect(() => {
    if (category) {
      dispatch(
        actArticlesAsync({
          categories: category.id,
        })
      );
    }
  }, [dispatch, category]);

  if (category === null) {
    return <PageNotFound />;
  }

  if (category === undefined) {
    return <LinearIndeterminate />;
  }

  return (
    <>
      <div className="articles-list section">
        <div className="tcl-container">
          <MainTitle type="search" btnProps={{}} btnLabel="">
            {total} kết quả tìm kiếm với "{slug}"
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

export default SearchCategory;

// let isFound = false;
// Object.keys(hashCategories).forEach((categoryId) => {
//   const categoryValue = hashCategories[categoryId]; // Lấy value ra{}
//   if (categoryValue.slug === slug && categoryValue.lang === "vi") {
//     setCategory(categoryValue); // luu lai gia tri category can tim kiem
//     isFound = true;
//   }
// });

// // Sau vong lap gia tri isFound van bang false => khong tim kiem duoc bat ki gia tri nao phu hop

// if (isFound === false) {
//   setCategory(null); // khong tro duoc toi bat ki category nao het
// }
