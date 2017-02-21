import { createStructuredSelector } from 'reselect';
import { getCounterValue, getFetchedUser } from './raw-selectors';

const sagaConnector = createStructuredSelector({
  counterValue: getCounterValue,
  fetchedUser: getFetchedUser,
});

export default sagaConnector;