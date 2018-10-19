import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import Actions from '../actions';

export function* watchPhotoDrum() {
  yield takeEvery(Actions.fetchLoad().type, fetchPhotoDrum);
}

function* fetchPhotoDrum() {
  try {
    const photo = yield call(() => new Promise(resolve =>
      resolve('link-drum')
    ));

    yield put(Actions.load({ photo }));
  } catch (error) {
    console.warn(error);
  }
}