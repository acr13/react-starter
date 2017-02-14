import React from 'react';
import { connect } from 'react-redux';

import SagaUser from '../../components/saga-user/';

import './sagas.css';
import sagaConnector from '../../selectors/saga-page';
import {
  onSimpleButtonClick,
  onApiButtonClick,
} from '../../actions/saga-page';

const Sagas = ({ fetchedUser, apiAction, simpleAction }) => (
  <div className="sagas">
    <div className="row">
      <button onClick={() => simpleAction()}>Simple Action</button>
      <label className="label">Simple Action</label>
    </div>
    <div className="row">
      <button onClick={() => apiAction()}>API Action</button>
      <label className="label">API Action</label>
    </div>

    <SagaUser user={fetchedUser} />
  </div>
);

export default connect(
  sagaConnector,
  (dispatch) => {
    return {
      simpleAction: () => dispatch(onSimpleButtonClick()),
      apiAction: () => dispatch(onApiButtonClick()),
    };
  }
)(Sagas);
