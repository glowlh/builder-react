import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import Actions from '../actions';
import Request, { RESPONSE_TYPE } from '../../../../end-points/base-request';
import { mapGetPhoto } from '../../../../end-points/mapper/photo';

export function* watchPhotoNight() {
  yield takeEvery(Actions.fetchLoad().type, fetchPhotoNight);
}

function* fetchPhotoNight() {
  try {
    let photo = yield call(() => new Promise(resolve =>
      Request.get('random/1300x800', RESPONSE_TYPE.blob)
        .then(blob => resolve({ url: URL.createObjectURL(blob) }))
    ));

    photo = mapGetPhoto(photo);
    yield put(Actions.load({ photo: photo.url }));
  } catch (error) {
    console.warn(error);
  }
}
