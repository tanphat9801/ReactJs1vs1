import { api } from "./api";

const CategoriesServices = {
  getList({ page = 1, per_page = 100 } = {}) {
    return api.call().get("/wp/v2/categories", {
      params: {
        page,
        per_page,
      },
    });
  },
};

export default CategoriesServices;
