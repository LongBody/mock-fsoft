import { createAction } from '@reduxjs/toolkit';
import { signInEnum } from 'app/pages/user/sign-in/screen/types';
import { actionPayload } from 'helper/index';

// sign in
export const signInRequest = createAction<any>(signInEnum.SIGN_IN_REQUEST);
export const signInSuccess = createAction(
  signInEnum.SIGN_IN_SUCCESS,
  (payload: Record<string, any>[]) => actionPayload(payload)
);
export const signInFailure = createAction(
  signInEnum.SIGN_IN_FAILURE,
  (payload: string, query: string) => actionPayload(payload, { query })
);
