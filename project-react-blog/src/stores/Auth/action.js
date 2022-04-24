import { authService } from "../../services/auth";

//action type
export const ACT_AUTH_LOGIN_SUCCESS = "ACT_AUTH_LOGIN_SUCCESS";

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

// action async

export const actFetchAPIAsync = (token) => {
  return async (dispatch) => {
    const response = await authService.fetchAPI(token);
    const user = response.data;
    dispatch(actAuthLoginSuccess({ user, token }));
  };
};

export const actAuthLoginAsync = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await authService.login(username, password);
      const token = response.data.token;
      const responseFetchAPI = await dispatch(actFetchAPIAsync(token));
      return {
        check: true,
      };
    } catch (error) {
      return {
        check: false,
        error: "username hoac password khong hop le",
      };
    }
  };
};
