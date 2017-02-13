import { SET_BACKGROUND } from '../../actions/consts';

let initialState = 'fff';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUND:
      return action.background;
    default:
      return state;
  }
};
