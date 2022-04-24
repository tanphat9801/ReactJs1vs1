import { api } from "./api";

const postService = {
  getList(params) {
    return api.call().get("/wp/v2/posts", {
      params: {
        ...params,
        lang: "vi",
      },
    });
  },
  getArticleLatest() {
    return postService.getList({
      per_page: 3,
      page: 1,
    });
  },
  getArticlePopular() {
    return postService.getList({
      per_page: 3,
      page: 1,
      oderby: "post_view",
    });
  },
  getArticleGeneral({ currentPage = 1, perPage = 2 } = {}) {
    return postService.getList({
      page: currentPage,
      per_page: perPage,
    });
  },
};

export default postService;
