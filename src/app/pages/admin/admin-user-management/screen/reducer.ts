import { createReducer } from '@reduxjs/toolkit';
import { adminListUserEnum } from 'app/pages/admin/admin-user-management/screen/types';
// import { setCookie } from 'utils/request';
// The initial state of the App
export const initialState: any = {
  loading: false,
  message: '',
  status: '',
  total : "",
  dataResponse: {},
};

export const adminListUserReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(adminListUserEnum.GET_LIST_USER_REQUEST, (state, action) => {
      state.dataResponse = {};
      state.status = '';
      state.message = ''
      state.loading = true;
      return state;
    })
    .addCase(adminListUserEnum.GET_LIST_USER_SUCCESS, (state, action: any) => {
      state.loading = false;
      console.log( action?.payload);
      
      state.status = action?.payload?.status;
      state.total = action?.payload?.data?.total
      state.dataResponse = action?.payload?.data?.result
      return state;
    })
    .addCase(adminListUserEnum.GET_LIST_USER_FAILURE, (state, action: any) => {
      state.status = action?.payload?.data?.status;
      state.loading = false;
      return state;
    });
});
