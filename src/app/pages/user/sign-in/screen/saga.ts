import {
  signInRequest,
  signInSuccess,
  signInFailure,
} from 'app/pages/user/sign-in/screen/action';
import { signInEnum } from 'app/pages/user/sign-in/screen/types';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { requestAPI, apiMethod } from 'utils/request';
import { API_URL } from 'utils/config';
import { API_CALL } from 'utils/api';

/**
 * Sign in
 *
 * @param {Object} action
 *
 */

export function* signInSaga({ payload }: ReturnType<typeof signInRequest>) {
  try {
    const response = yield call(
      requestAPI,
      `${API_URL}${API_CALL?.API_SIGN_IN}`,
      apiMethod.POST,
      payload
    );
    yield put(signInSuccess(response?.data));
  } catch (error: any) {
    yield put(signInFailure(error?.response, error.message));
  }
}

export default function* root() {
  yield all([takeLatest(signInEnum.SIGN_IN_REQUEST, signInSaga)]);
}
