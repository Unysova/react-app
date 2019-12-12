import { combineReducers } from 'redux';
import authReducer from './authReducer'
import usersReducer from './usersReducer'
import mainReducer from './mainReducer'

const indexReducer = combineReducers({
  authReducer,
  usersReducer,
  mainReducer
})

export { indexReducer };
  