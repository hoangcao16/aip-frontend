import { PayloadAction } from '@reduxjs/toolkit';
import { authService } from 'services/authService';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { authloginSaga } from './saga';
import { AuthloginState } from './types';

export const initialState: AuthloginState = {
  isLoading: false,
  responseLogin: {},
};

const slice = createSlice({
  name: 'authlogin',
  initialState,
  reducers: {
    loginRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    loginSuccess(state, action) {
      state.responseLogin = action.payload;
      state.isLoading = false;
      authService.autoRefreshAccessToken();
      authService.checkAccessToken();
    },
    loginFail(state, action) {
      state.responseLogin = action.payload;
      state.isLoading = false;
    },
  },
});

export const { actions: authloginActions } = slice;

export const useAuthloginSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: authloginSaga });
  return { actions: slice.actions };
};
