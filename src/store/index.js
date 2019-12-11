import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { mainReducer as reducer} from './reducers/mainReducer';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export { store };