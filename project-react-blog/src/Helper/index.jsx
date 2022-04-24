export function getQueryStr(q) {
  return new URLSearchParams(window.location.search).get(q);
}
//url param dung de lay gia tri chuoi dc ma hoa

export function mapingPostData(posts) {
  return {
    id: posts.id,
    title: posts.title.rendered,
    author: posts.author_data,
    thumbnail: posts.featured_media_url,
    createDate: posts.date,
    slug: posts.slug,
    authorId: posts.author,
    categoriesId: posts.categories,
    viewCount: posts.view_count,
    shortHTMLDesc: posts.excerpt.rendered,
  };
}

export function handleHashCategoryById(categories) {
  const hashObj = {};
  categories.forEach((categoryItem) => {
    const key = categoryItem.id;
    hashObj[key] = {
      id: categoryItem.id,
      name: categoryItem.name,
      slug: categoryItem.slug,
    };
  });
  return hashObj;
}

export const validateFormData = ({ value, name }) => {
  let error = "";
  // logic
  if (name === "username" && !value) {
    error = " username khong duoc rong ";
  }
  if (name === "password") {
    if (!value) error = "password khong duoc rong";
    else if (value.length < 6)
      error = "password phai co do dai it nhat 6 ki tu";
  }
  return error;
};
