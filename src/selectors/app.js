import { createStructuredSelector } from 'reselect';
import R from 'ramda';

const getRoutes = R.prop(['routes']);

const appConnector = createStructuredSelector({
  routes: getRoutes,
});

export default appConnector;