import { ACCESS_TOKEN } from "../../constants";
import { ACT_AUTH_LOGIN_SUCCESS, ACT_LOGOUT_SUCCESS } from "./action";

const inititalState = {
  currentUser: null,
  token: localStorage.getItem(ACCESS_TOKEN),
};// giá trị khởi tạo của token được lấy từ localStorage, mục đích của việc này nhằm tối ưu trải nghiệm người dùng 

function reducer(authState = inititalState, action) {
  switch (action.type) {
    case ACT_AUTH_LOGIN_SUCCESS:
      localStorage.setItem(ACCESS_TOKEN, action.payload.token);
      return {
        currentUser: action.payload.user,
        token: action.payload.token,
      };
    case ACT_LOGOUT_SUCCESS:
      localStorage.removeItem(ACCESS_TOKEN);
      return {
        currentUser: null,
        token: "",
      };
    default:
      return authState;
  }
}

export default reducer;
