import api from "./api";

export const postServices = {
  getList({
      pageSize,
      CurrentPage
  }) {
    return api.get("/post/getListPagination.php?", {
      params: {
        pageSize: pageSize,
        currPage: CurrentPage,
      },
    });
  },
};


