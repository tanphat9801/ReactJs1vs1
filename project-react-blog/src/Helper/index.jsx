import { DEFAULT_AVATAR, MESSAGE_FORM_ERROR, ROUTER_POST } from "../constants";

import { formatRelativeDate } from "./day";

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

export function mappingCommentsData(commentItem) {
  return {
    id: commentItem.id,
    postId: commentItem.post,
    parentId: commentItem.parent,
    authorName: commentItem.author_name,
    contentHTML: commentItem.content.rendered,
    authorAvatar: commentItem.author_data.avatar || DEFAULT_AVATAR,
    createDate: commentItem.date,
    authorId: commentItem.author,
    replyCount: commentItem.comment_reply_count,
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
      lang: categoryItem.lang,
    };
  });
  return hashObj;
}

export function handleHashTagById(tag) {
  const hashObj = {};
  tag.forEach((tagItem) => {
    const key = tagItem.id;
    hashObj[key] = {
      id: tagItem.id,
      name: tagItem.name,
      slug: tagItem.slug,
      lang: tagItem.lang,
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

export const mappingCurrentUser = (user) => {
  return {
    id: user.id,
    nickname: user.nickname,
    email: user.email,
    avatar: user.avatar_urls[24],
  };
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateFormResigter = ({ value, name }) => {
  let error = "";
  if (name === "email") {
    if (!value) {
      error = MESSAGE_FORM_ERROR.email_required;
    } else if (!validateEmail(value)) {
      error = MESSAGE_FORM_ERROR.rest_user_invalid_email;
    }
  } else if (name === "username" && !value) {
    error = MESSAGE_FORM_ERROR.username_required;
  } else if (name === "password") {
    if (!value) {
      error = MESSAGE_FORM_ERROR.password_required;
    } else if (value.length < 6) {
      error = MESSAGE_FORM_ERROR.password_length;
    }
  }
  return error;
};

export const highlightText = (queryStr, targetStr) => {
  const reg = RegExp(queryStr, "gi");
  const finalStr = targetStr.replace(reg, (str) => {
    return "<mark>" + str + "</mark>";
  });
  return finalStr;
};

// menu
export const mappingMainMenu = (menuItem) => {
  const data = {
    id: menuItem.ID,
    url: menuItem.url,
    title: menuItem.title,
    childItems: menuItem.child_items || [],
  };

  data.childItems = data.childItems.map(mappingMainMenu);
  // gọi lại hàm mappingMainMenu để chạy tiếp cho các cấp menu nhỏ hơn

  return data;
};
// khi nếu thực hiện theo cách thử công(map theo từng cấp menu )thì sẽ mất rất nhiều thời gian và không hợp lí
// sử dụng đệ quy( hàm dùng để gọi lại chính nó ) trong trường hợp này thì data đều giống nhau

// mapping postdetail
export const mappingPostDetail = (post) => {
  return {
    ...mapingPostData(post),
    tagsId: post.tags,
    contentHTML: post.content.rendered,
    commentcount: post.comment_count,
  };
};

export const genUserLink = (authorId) => {
  return `/user/${authorId}`;
};

export const genPostLink = (slug) => {
  return ROUTER_POST.replace(":slug", slug);
};
