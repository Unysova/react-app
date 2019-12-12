import { AUTH_SUCCESS, LOGOUT, SET_USER, api } from '../constants';
import { showLoader, hideLoader} from '../actions/common';
import axios from 'axios';

export function getMe() {
  return async (dispatch, getState) => {
    const { login } = getState().authReducer;
    const { usersList } = getState().usersReducer;
    for( let user of usersList) {
      if (user.email === login) {
        dispatch({
          type: SET_USER,
          payload: {
            userInfo: user,
            roles: user.roles
          }
        });
      }
    }
  }
}

export function auth({login, password}) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const result = await axios.get(`${api}/login`);
      if (!(login in result.data) || result.data[login] !== password) {
        alert('Неверный логин или пароль');
        return
      }
      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          login: login
        }
      });
    }
    catch (e) {
      
    }
    finally {
      dispatch(hideLoader());
    }
  };
}

export function logout () {
  return {
    type: LOGOUT
  };
}