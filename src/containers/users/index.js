import React from 'react';
import { connect } from 'react-redux';

import userConnector from '../../selectors/users';

const Users = ({ users }) => (
  <div>
    {users.map(user =>
      <p key={user.id}>USER: {user.name}</p>
    )}
  </div>
);

export default connect(
  userConnector,
  () => ({})
)(Users);
