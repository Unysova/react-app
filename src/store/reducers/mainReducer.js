import { SHOW_LOADER, HIDE_LOADER } from '../constants'

const initialState = {
  showLoader: false,
  errors: null
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER: {
      return {
        ...state, 
        showLoader: true
      }
    };

    case HIDE_LOADER: {
      return {
        ...state,
        showLoader: false
      };      
    }

    default: 
      return state
  }
}

export default mainReducer;