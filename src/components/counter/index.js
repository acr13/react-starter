import React from 'react';

import './counter.css';

const Counter = ({ onIncrementCounter, onDecrementCounter, value }) => {
  return (
    <div>
      <button onClick={() => onIncrementCounter()}>{'+'}</button>
      <span className="counter">{value}</span>
      <button onClick={() => onDecrementCounter()}>{'-'}</button>
    </div>
  );
}

export default Counter;