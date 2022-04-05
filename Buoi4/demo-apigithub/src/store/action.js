import axios from "axios";

export const ACT_GET_LIST_POST_SYNC = "ACT_GET_LIST_POST_SYNC";

// action creator
export function actGetListPostSync(posts) {
  console.log(posts);
  return {
    type: "ACT_GET_LIST_POST_SYNC",
    payload: {
      posts
    },
  };
}

export function actGetListPostAsync() {
  return (dispatch) => {
    axios
      .get("https://api.github.com/users")
      .then(function (response) {
        dispatch(actGetListPostSync(response.data))

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
}
