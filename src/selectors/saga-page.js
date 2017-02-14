import { createStructuredSelector } from 'reselect';
import { getFetchedUser } from './raw-selectors';

const sagaConnector = createStructuredSelector({
  fetchedUser: getFetchedUser,
});

export default sagaConnector;