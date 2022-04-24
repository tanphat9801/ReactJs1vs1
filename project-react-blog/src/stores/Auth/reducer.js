import { ACT_AUTH_LOGIN_SUCCESS } from "./action";

const inititalState = {
  currentUser: [],
  token: "",
};

function reducer(authState = inititalState, action) {
  switch (action.type) {
    case ACT_AUTH_LOGIN_SUCCESS:
      localStorage.setItem("st", action.payload.token)
      return {
        currentUser: action.payload.user,
        token: action.payload.token,
      };
    default:
      return authState;
  }
}

export default reducer;
