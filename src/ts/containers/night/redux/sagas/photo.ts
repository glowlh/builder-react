import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import Actions from '../actions';

export function* watchPhotoNight() {
  yield takeEvery(Actions.fetchLoad().type, fetchPhotoNight);
}

function* fetchPhotoNight() {
  try {
    const photo = yield call(() => new Promise(resolve =>
      resolve('link')
    ));

    yield put(Actions.load({ photo }));
  } catch (error) {
    console.warn(error);
  }
}