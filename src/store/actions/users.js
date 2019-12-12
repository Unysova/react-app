import { SET_USERS_LIST, api } from '../constants';
import { showLoader, hideLoader} from './common';
import axios from 'axios';
import { Promise } from 'q';


export function getUsers () {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const result = await axios.get(`${api}/users`);
      dispatch({
        type: SET_USERS_LIST,
        payload: result.data
      });
      return Promise.resolve()
    }
    catch (e) {
      alert('Произошла ошибка');
    }
    finally {
      dispatch(hideLoader());
    }
  }
}

export function addUser (newUser) {
  return async (dispatch, getState) => {
    const { usersList } = getState().usersReducer;
    newUser.department.toLowerCase();
    const usersArr = [...usersList, newUser];
    dispatch({
      type: SET_USERS_LIST,
      payload: usersArr
    });
  }

}