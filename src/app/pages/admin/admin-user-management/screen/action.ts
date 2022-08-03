import { createAction } from '@reduxjs/toolkit';
import { adminListUserEnum } from 'app/pages/admin/admin-user-management/screen/types';
import { actionPayload } from 'helper/index';

// sign in
export const getListUserRequest = createAction<any>(adminListUserEnum.GET_LIST_USER_REQUEST);
export const getListUserSuccess = createAction(
  adminListUserEnum.GET_LIST_USER_SUCCESS,
  (payload: Record<string, any>[]) => actionPayload(payload)
);
export const getListUserFailure = createAction(
  adminListUserEnum.GET_LIST_USER_FAILURE,
  (payload: string, query: string) => actionPayload(payload, { query })
);
