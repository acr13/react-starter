import { combineReducers } from 'redux';

import routes from './routes/';
import sagas from './sagas/';
import users from './users/';

const rootReducer = combineReducers({
  routes,
  sagas,
  users,
});

export default rootReducer;
