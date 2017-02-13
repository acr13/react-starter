import { createStructuredSelector } from 'reselect';
import { getUsers } from './raw-selectors';

const userConnector = createStructuredSelector({
  users: getUsers,
});

export default userConnector;