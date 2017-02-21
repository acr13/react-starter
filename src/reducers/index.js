import { combineReducers } from 'redux';

import counter from './counter/';
import randomNum from './random-num/';
import routes from './routes/';
import sagas from './sagas/';
import users from './users/';

const rootReducer = combineReducers({
  counter,
  randomNum,
  routes,
  sagas,
  users,
});

export default rootReducer;
