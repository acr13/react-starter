import R from 'ramda';

import {
  GENERATE_RANDOM_NUMBER,
} from '../../actions/consts';

const initialState = {
  value: 0,
};

export default (state = initialState, action) => {
  if (action.type === GENERATE_RANDOM_NUMBER) {
    return R.assoc('value', action.payload, state);
  }

  return state;
};
