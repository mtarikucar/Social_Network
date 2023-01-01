import { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure,logoutStart, logoutSuccess, logoutFailure, } from './auth-slice';
import { userRequest } from '../requestMethods';
import { destroyModal } from "../utils/modal";

export const login = (user) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const response = await userRequest.post('/auth/login', user);
      dispatch(loginSuccess(response.data.data));
      destroyModal()
    } catch (err) {
      dispatch(loginFailure());
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(logoutStart());
    try {
      // çıkış yaparken işlemleri test etmek için bu kısmı ilerde kullancan
      dispatch(logoutSuccess());
    } catch (err) {
      dispatch(logoutFailure());
    }
  };
};


export const register = (user) => {
  return async (dispatch) => {
    dispatch(registerStart());
    try {
      const response = await userRequest.post('/auth/register', user);
      dispatch(registerSuccess(response.data));
      destroyModal();
    } catch (err) {
      dispatch(registerFailure());
    }
  };
};
