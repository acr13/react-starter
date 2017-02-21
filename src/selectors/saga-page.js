import { createStructuredSelector } from 'reselect';
import { getCounterValue, getFetchedUser, getRandomValue } from './raw-selectors';

const sagaConnector = createStructuredSelector({
  counterValue: getCounterValue,
  fetchedUser: getFetchedUser,
  randomValue: getRandomValue,
});

export default sagaConnector;