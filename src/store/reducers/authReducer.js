import { AUTH_SUCCESS, LOGOUT } from '../constants'

const initialState = {
  alreadyLogin: false,
  userInfo: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS: {
      return {
        ...state, 
        alreadyLogin: action.payload.alreadyLogin,
        userInfo: action.payload.userInfo
      }
    };

    case LOGOUT: {
      return {
        ...state,
        alreadyLogin: false
      };      
    }

    default: 
      return state
  }
}

export default authReducer;