import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logoutStart,
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    return res;
  } catch (err) {
    dispatch(loginFailure());
    return err.response;
  }
};

export const logout = async (dispatch, user) => {
  try {
    await dispatch(logoutStart());
    return true;
  } catch (err) {
    console.log(err);
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
    return true;
  } catch (err) {
    dispatch(registerFailure());
    return err;
  }
};
