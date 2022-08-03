import {
  getListUserRequest,
  getListUserSuccess,
  getListUserFailure,
} from 'app/pages/admin/admin-user-management/screen/action';
import { adminListUserEnum } from 'app/pages/admin/admin-user-management/screen/types';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { apiMethod, requestAPIWithToken } from 'utils/request';
import { API_URL } from 'utils/config';
import { API_CALL } from 'utils/api';

/**
 * admin get list user
 *
 * @param {Object} action
 *
 */

export function* getListUserSaga({
  payload,
}: ReturnType<typeof getListUserRequest>) {
  try {
    const response = yield call(
      requestAPIWithToken,
      `${API_URL}${API_CALL?.API_GET_ALL_USER}&size=${payload?.size}&page=${payload?.page}`,
      apiMethod.GET,
      ''
    );
    yield put(getListUserSuccess(response?.data));
  } catch (error: any) {
    yield put(getListUserFailure(error?.response, error.message));
  }
}

export default function* root() {
  yield all([
    takeLatest(adminListUserEnum.GET_LIST_USER_REQUEST, getListUserSaga),
  ]);
}
