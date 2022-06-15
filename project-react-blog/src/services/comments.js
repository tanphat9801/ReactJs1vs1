import { api } from "./api";

const CommentService = {
  getList({ perPage = 2, currentPage = 1, parentId, postId, ...restParams }) {
    return api.call().get("/wp/v2/comments", {
      params: {
        page: currentPage,
        per_page: perPage,
        post: postId,
        parent: parentId,
        lang: "vi",
        ...restParams,
      },
    });
  },
  // createComment({
  //   authorId,
  //   content,
  //   postId,
  //   parentId
  // }){
  //   // return api.call( )
  // }
};

export default CommentService;
