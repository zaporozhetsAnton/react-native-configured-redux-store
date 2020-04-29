import {put, takeEvery, all, fork, call} from 'redux-saga/effects';

import {ExampleActionTypes} from '../actions/types';
import * as actions from '../actions';

const fakeRequest = (ms: number) =>
  new Promise((res) =>
    setTimeout(() => {
      res({
        lorem: 'lorem async',
        ipsum: 'ipsum async',
      });
    }, ms),
  );

function* asyncSaga() {
  try {
    const response = yield call(fakeRequest, 5000);
    yield put(actions.firstAction(response));
  } catch (e) {
    console.log('asyncSaga error', e);
    // error handling
  }
}

function* watchAsyncSaga() {
  yield takeEvery(ExampleActionTypes.ASYNC_LOREM, asyncSaga);
}

export default function* () {
  yield all([fork(watchAsyncSaga)]);
}
