import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import Actions from '../actions';
import Request from '../../../../end-points/base-request';

export function* watchPhotoNight() {
  yield takeEvery(Actions.fetchLoad().type, fetchPhotoNight);
}

function* fetchPhotoNight() {
  try {
    const photo = yield call(() => Request.get('random'));

    yield put(Actions.load({ photo: photo.url }));
  } catch (error) {
    console.warn(error);
  }
}