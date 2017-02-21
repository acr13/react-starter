import { combineReducers } from 'redux';

import counter from './counter/';
import routes from './routes/';
import sagas from './sagas/';
import users from './users/';

const rootReducer = combineReducers({
  counter,
  routes,
  sagas,
  users,
});

export default rootReducer;
