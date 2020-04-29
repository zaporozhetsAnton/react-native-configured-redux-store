import {all, fork} from 'redux-saga/effects';

import {sagas as exampleSagas} from './example';

export default function* rootSaga() {
  yield all([fork(exampleSagas)]);
}
