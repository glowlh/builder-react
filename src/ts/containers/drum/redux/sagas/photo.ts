import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import Actions from '../actions';
import Request from '../../../../end-points/base-request';
import { mapGetPhoto } from '../../../../end-points/mapper/photo';

export function* watchPhotoDrum() {
  yield takeEvery(Actions.fetchLoad().type, fetchPhotoDrum);
}

function* fetchPhotoDrum() {
  try {
    let photo = yield call(() => Request.get('random/1300x800'));

    photo = mapGetPhoto(photo);
    yield put(Actions.load({ photo: photo.url }));
  } catch (error) {
    console.warn(error);
  }
}
