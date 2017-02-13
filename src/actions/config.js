import { SET_BACKGROUND } from './consts';

export const setBackground = () => {
  return {
    type: SET_BACKGROUND,
    background: '#ff0000',
  };
};