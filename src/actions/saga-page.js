import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  API_BUTTON_CLICK,
} from './consts';

// helper function to create redux actions
// returns a function that returns an object
// with type and payload set

const action = (type, payload = null) => () => ({ type, payload });

const sagaPageActions = {
  onApiButtonClick: action(API_BUTTON_CLICK),
  onIncrementCounter: action(INCREMENT_COUNTER),
  onDecrementCounter: action(DECREMENT_COUNTER),
};

export default sagaPageActions;
