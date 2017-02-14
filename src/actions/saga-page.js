import {
  SIMPLE_BUTTON_CLICK,
  API_BUTTON_CLICK,
} from './consts';

export const onSimpleButtonClick = () => {
  return {
    type: SIMPLE_BUTTON_CLICK,
  };
};

export const onApiButtonClick = () => {
  return {
    type: API_BUTTON_CLICK,
  };
};