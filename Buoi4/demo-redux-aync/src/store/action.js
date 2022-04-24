import { postServices } from "../services/posts";

//action type
export const ACT_GET_LIST_POST_SYNC = "ACT_GET_LIST_POST_SYNC";

// action creator
export function actGetListPostSync(posts) {
  return {
    type: "ACT_GET_LIST_POST_SYNC",
    payload: {
      posts,
    },
  };
}

// // action async
export function actGetListPostAsync({ pageSize, CurrentPage }) {
  return async (dispatch) => {
    const response = await postServices.getList({
      pageSize,
      CurrentPage,
    });
    if (response.data.status === 200) {
      const posts = response.data.posts;
      dispatch(actGetListPostSync(posts));
    }
  };
} //=> cu phap await trong bat dong bo
// giup code truc quan hon

//action asycn return gia tri function goi co dispatch
// gia lap sau khi 3s sevver se tra ve backend
// tiep tuc dispatch kich hoat action dong bo truyen du lieu tu backend nhan duoc vao reducer


// export function actGetListPostAsync({
//     pageSize,
//     CurrentPage
// }){
//     return dispatch => {
//        postServices.getList({
//         pageSize,
//         CurrentPage
//        })
//        .then((response)=>{
//         if(response.data.status === 200){
//             const posts = response.data.posts
//             dispatch(actGetListPostSync(posts))
//         }
//        })
//     }
// }
