import React from 'react';

const SagaUser = ({ user }) => {
  if (!user) {
    return null;
  }
  
  return (
    <div>
      <div>id: {user.id}</div>
      <div>title: {user.title}</div>
      <div>body: {user.body}</div>
    </div>
  );
}

export default SagaUser;