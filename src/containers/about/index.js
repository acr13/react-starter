import React from 'react';
import { connect } from 'react-redux';

const About = () =>
  <div className="App">
    <div>
      <p>about</p>
    </div>
  </div>

export default connect(() => ({}), () => ({}))(About);
