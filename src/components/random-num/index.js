import React from 'react';

const RandomNum = ({ value, onNewRandomNumber }) => (
  <div>
    <button onClick={() => onNewRandomNumber(Math.random())}>Generate Random Number</button>
    <label className="label">{value}</label>
  </div>
);

export default RandomNum;
