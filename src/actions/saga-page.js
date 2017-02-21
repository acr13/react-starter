import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  API_BUTTON_CLICK,
  GENERATE_RANDOM_NUMBER,
} from './consts';

// helper function to create redux actions
// returns a function that returns an object
// with type and payload set

const action = (type, payload = null) => (payload) => ({ type, payload });

const sagaPageActions = {
  onApiButtonClick: action(API_BUTTON_CLICK),
  onIncrementCounter: action(INCREMENT_COUNTER),
  onDecrementCounter: action(DECREMENT_COUNTER),
  onNewRandomNumber: action(GENERATE_RANDOM_NUMBER),
};

export default sagaPageActions;
