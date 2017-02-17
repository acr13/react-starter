import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { apiSideEffect, simpleSideEffect } from './index';
import { API_BUTTON_CLICK_SUCCESS, } from '../../actions/consts';
import { getUser } from '../../api/users';

it('Saga - simpleSideEffect - delays for 1 ms', () => {
  const generator = simpleSideEffect();

  expect(generator.next().value)
    .toEqual(call(delay, 1));
  
  expect(generator.next())
    .toEqual({ done: true, value: undefined });
});

it ('Saga - apiSideEffect - gets random user and puts success action', () => {
  const generator = apiSideEffect();

  expect(generator.next().value)
    .toEqual(call(getUser));

  expect(generator.next().value)
    .toEqual(put({ type: API_BUTTON_CLICK_SUCCESS }));

  expect(generator.next())
    .toEqual({ done: true, value: undefined });
});
