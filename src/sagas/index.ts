import { all } from 'redux-saga/effects';
import signInSagas from 'app/pages/user/sign-in/screen/saga';
import adminListUserSagas from 'app/pages/admin/admin-user-management/screen/saga';

export default function* rootSaga() {
  yield all([signInSagas(), adminListUserSagas()]);
}
