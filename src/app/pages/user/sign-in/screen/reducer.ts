import { createReducer } from '@reduxjs/toolkit';
import { signInEnum } from 'app/pages/user/sign-in/screen/types';
// import { setCookie } from 'utils/request';
// The initial state of the App
export const initialState: any = {
  loading: false,
  message: '',
  status: '',
  dataResponse: {},
};

export const signInReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signInEnum.SIGN_IN_REQUEST, (state, action) => {
      state.dataResponse = {};
      state.status = '';
      state.message = ''
      state.loading = true;
      return state;
    })
    .addCase(signInEnum.SIGN_IN_SUCCESS, (state, action: any) => {
      state.loading = true;
      state.message = ''
      state.status = action?.payload?.status;
      state.dataResponse = action?.payload?.data?.user
      localStorage.setItem('user', JSON.stringify(action?.payload?.data?.user));
      localStorage.setItem(
        'accessToken',
        action?.payload?.data?.tokens?.access?.token
      );
      localStorage.setItem(
        'refreshToken',
        action?.payload?.data?.tokens?.refresh?.token
      );
      return state;
    })
    .addCase(signInEnum.SIGN_IN_FAILURE, (state, action: any) => {
      state.status = action?.payload?.data?.status;
      if (action?.payload?.data?.status === 404) {
        state.message = action?.payload?.data?.message;
      }
      if (action?.payload?.data?.status === 401) {
        state.message = action?.payload?.data?.message;
      }
      state.loading = false;
      return state;
    });
});
