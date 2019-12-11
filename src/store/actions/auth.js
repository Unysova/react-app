import { AUTH_SUCCESS, LOGOUT } from '../constants';
import axios from 'axios';


export function auth({login, password}) {
  return async (dispatch, getState) => {
    console.info('auth')

    const result = await axios.get('https://my-json-server.typicode.com/Unysova/react-app/login');
    if (!(login in result.data) || result.data[login] !== password) {
      alert('Неверный логин или пароль');
      return
    }
    alert('Ура отечеству, входим');
    


    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        alreadyLogin: true,
        userInfo: result.data[login]
      }
    });

    // dispatch({
    //   type: SET_MAIN_USER,
    //   payload: true
    // });
  };
}