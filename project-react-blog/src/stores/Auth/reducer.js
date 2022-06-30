import { ACCESS_TOKEN } from "../../constants";
import {
  ACT_AUTH_LOGIN_SUCCESS,
  ACT_LOGOUT_SUCCESS,
  ACT_SET_TOKEN,
} from "./action";

const inititalState = {
  currentUser: null,
  token: localStorage.getItem(ACCESS_TOKEN),
}; // giá trị khởi tạo của token được lấy từ localStorage, mục đích của việc này nhằm tối ưu trải nghiệm người dùng

function reducer(authState = inititalState, action) {
  switch (action.type) {
    case ACT_SET_TOKEN:
      localStorage.setItem(ACCESS_TOKEN, action.payload.token);
      return {
        ...authState,
        token: action.payload.token,
      };
    case ACT_AUTH_LOGIN_SUCCESS:
      localStorage.setItem(ACCESS_TOKEN, action.payload.token);
      return {
        ...authState,
        currentUser: action.payload.user,
        token: action.payload.token,
      };
    case ACT_LOGOUT_SUCCESS:
      localStorage.removeItem(ACCESS_TOKEN);
      return {
        ...authState,
        currentUser: null,
        token: "",
      };
    default:
      return authState;
  }
}

export default reducer;
