import React from 'react';

import './code.css';

const SagaUser = ({ user }) => {
  if (!user) {
    return null;
  }
  
  return (
    <div className="code-wrapper">
      <code>{JSON.stringify(user, null, '\t')}</code>
    </div>
  );
}

export default SagaUser;