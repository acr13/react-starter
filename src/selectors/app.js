import { createStructuredSelector } from 'reselect';
import { getRoutes } from './raw-selectors';

const appConnector = createStructuredSelector({
  routes: getRoutes,
});

export default appConnector;