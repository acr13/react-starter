import React from 'react';
import { connect } from 'react-redux';

const Users = ({ users }) => (
  <div>
    {users.map(user =>
      <p key={user.id}>USER: {user.name}</p>
    )}
  </div>
);

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
