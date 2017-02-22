import React from 'react';
import { connect } from 'react-redux';

import Counter from '../../components/counter/';
import SagaUser from '../../components/saga-user/';
import RandomNum from '../../components/random-num/';

import './sagas.css';
import sagaConnector from '../../selectors/saga-page';
import sagaActions from '../../actions/saga-page';

const Sagas = (props) => (
  <div className="sagas">
    <div className="row">{'Simple Actions (counter)'}</div>
    <div className="row">
      <Counter
        value={props.counterValue}
        onIncrementCounter={props.onIncrementCounter}
        onDecrementCounter={props.onDecrementCounter}
      />
    </div>
    <div className="row">{'Actions with a payload (random num)'}</div>
    <div className="row">
      <RandomNum
        onNewRandomNumber={props.onNewRandomNumber}
        value={props.randomValue} />
    </div>
    <div className="row">
      <button onClick={() => props.onApiButtonClick()}>{'API Action'}</button>
      <label className="label">{'API Action'}</label>
    </div>

    <SagaUser user={props.fetchedUser} />
  </div>
);

export default connect(sagaConnector, sagaActions)(Sagas);
