import { loginStart, loginSuccess, loginFailure } from './auth-slice';
import { publicRequest } from '../requestMethods';

export const login = (user) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const response = await publicRequest.post('/auth/login', user);
      dispatch(loginSuccess(response.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };
};