import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { indexReducer as reducer} from './reducers/indexReducer';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export { store };