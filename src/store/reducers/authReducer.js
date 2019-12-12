import { AUTH_SUCCESS, LOGOUT, SET_USER } from '../constants'

const initialState = {
  alreadyLogin: false,
  login: null,
  userInfo: null,
  roles: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS: {
      return {
        ...state, 
        alreadyLogin: true,
        login: action.payload.login    
      }
    };

    case LOGOUT: {
      return {
        ...state,
        alreadyLogin: false
      };      
    }

    case SET_USER: {
      return {
        ...state, 
        userInfo: action.payload.userInfo,
        roles: action.payload.roles
      }
    }

    default: 
      return state
  }
}

export default authReducer;