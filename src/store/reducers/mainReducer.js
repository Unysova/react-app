import { combineReducers } from 'redux';
import authReducer from './authReducer'

const mainReducer = combineReducers({
  authReducer,
  //usersReduser
})

export { mainReducer };
  