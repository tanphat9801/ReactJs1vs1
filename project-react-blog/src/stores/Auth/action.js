import { ACCESS_TOKEN, MESSAGE_FORM_ERROR } from "../../constants";
import { mappingCurrentUser } from "../../Helper";
import { authService } from "../../services/auth";

//action type
export const ACT_AUTH_LOGIN_SUCCESS = "ACT_AUTH_LOGIN_SUCCESS";
export const ACT_LOGOUT_SUCCESS = "ACT_LOGOUT_SUCCESS";

// action creator

export const actAuthLoginSuccess = ({ user, token }) => {
  return {
    type: ACT_AUTH_LOGIN_SUCCESS,
    payload: {
      user,
      token,
    },
  };
};

export const actLogout = () => {
  return {
    type: ACT_LOGOUT_SUCCESS,
  };
};

// action async

export const actFetchAPIAsync = (token) => {
  if (token === undefined) {
    token = localStorage.getItem(ACCESS_TOKEN);
  }
  return async (dispatch) => {
    try {
      const response = await authService.fetchAPI(token);
      const user = mappingCurrentUser(response.data);
      dispatch(actAuthLoginSuccess({ user, token }));
      return {
        check: true,
      };
    } catch (err) {
      // localStorage.removeItem(ACCESS_TOKEN);// bước này chỉ mới remove token ở localStorage
      dispatch(actLogout()); //đây là bước xóa đi phần token ko hợp lệ bên trong store
      return {
        check: false,
        error: "username hoac password khong hop le",
      };
    }
  };
};

export const actAuthLoginAsync = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await authService.login(username, password);
      const token = response.data.token;
      const responseFetchAPI = await dispatch(actFetchAPIAsync(token));
      return {
        check: responseFetchAPI.check,
        error: responseFetchAPI.error,
      };
    } catch (error) {
      return {
        check: false,
        error: "username hoac password khong hop le",
      };
    }
  };
};

export const actRegisterAsync = ({ nickname, username, email, password }) => {
  return async (dispatch) => {
    try {
      const response = await authService.register({
        nickname,
        username,
        email,
        password,
      });

      const responseLogin = await dispatch(
        actAuthLoginAsync(username, password)
      );

      if (responseLogin.check) {
        return {
          check: true,
        };
      } // truong hop ko co loi
    } catch (error) {
      let errorMessage = MESSAGE_FORM_ERROR.default;
      if (error.response && error.response.data && error.response.data.code) {
        const errorCode = error.response.data.code;
        if (MESSAGE_FORM_ERROR[errorCode]) {
          errorMessage = MESSAGE_FORM_ERROR[errorCode];
        }
      }
      return {
        check: false,
        error: errorMessage,
      };
    }
  };
};
