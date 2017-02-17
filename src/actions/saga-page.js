import {
  SIMPLE_BUTTON_CLICK,
  API_BUTTON_CLICK,
} from './consts';

// helper function to create redux actions
// returns a function that returns an object
// with type and payload set

const action = (type, payload = null) => () => ({ type, payload });

const sagaPageActions = {
  onApiButtonClick: action(API_BUTTON_CLICK),
  onSimpleButtonClick: action(SIMPLE_BUTTON_CLICK),
};

export default sagaPageActions;
