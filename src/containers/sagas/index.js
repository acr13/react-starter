import React from 'react';
import { connect } from 'react-redux';

import SagaUser from '../../components/saga-user/';

import './sagas.css';
import sagaConnector from '../../selectors/saga-page';
import sagaActions from '../../actions/saga-page';

const Sagas = (props) => (
  <div className="sagas">
    <div className="row">
      <button onClick={() => props.onSimpleButtonClick()}>Simple Action</button>
      <label className="label">Simple Action</label>
    </div>
    <div className="row">
      <button onClick={() => props.onApiButtonClick()}>API Action</button>
      <label className="label">API Action</label>
    </div>

    <SagaUser user={props.fetchedUser} />
  </div>
);

export default connect(sagaConnector, sagaActions)(Sagas);
