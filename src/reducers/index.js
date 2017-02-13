import { combineReducers } from 'redux';

import config from './config/';
import routes from './routes/';
import users from './users/';

const rootReducer = combineReducers({
  config,
  routes,
  users,
});

export default rootReducer;
