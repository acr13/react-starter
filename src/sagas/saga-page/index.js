import { delay } from 'redux-saga';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import {
  SIMPLE_BUTTON_CLICK,
  API_BUTTON_CLICK,
  API_BUTTON_CLICK_SUCCESS,
  API_BUTTON_CLICK_ERROR,
} from '../../actions/consts';
import { getUser } from '../../api/users';

function* simpleSideEffect(action) {
  yield delay(1);
}

export function* simpleSaga() {
  yield takeEvery(SIMPLE_BUTTON_CLICK, simpleSideEffect);
}

function* apiSideEffect(action) {
  try {
    const user = yield call(getUser);
    yield put({ type: API_BUTTON_CLICK_SUCCESS, payload: user });
  } catch (e) {
    yield put({ type: API_BUTTON_CLICK_ERROR, message: e.message });
  }
}

export function* apiSaga() {
  yield takeLatest(API_BUTTON_CLICK, apiSideEffect);
}
