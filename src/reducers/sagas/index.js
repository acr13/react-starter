import R from 'ramda';

import {
  API_BUTTON_CLICK_SUCCESS,
  API_BUTTON_CLICK_ERROR,
} from '../../actions/consts';

const initialState = {
  fetchedUser: null,
};

export default (state = initialState, action) => {
  if (action.type === API_BUTTON_CLICK_SUCCESS) {
    return R.assoc('fetchedUser', action.payload, state);
  } else if (action.type === API_BUTTON_CLICK_ERROR) {
    return initialState;
  }

  return state;
};
