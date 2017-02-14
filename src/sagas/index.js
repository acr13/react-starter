import { fork } from 'redux-saga/effects';

import { apiSaga, simpleSaga } from './saga-page/';

function* rootSaga() {
  yield [
    fork(apiSaga),
    fork(simpleSaga),
  ];
};

export default rootSaga;