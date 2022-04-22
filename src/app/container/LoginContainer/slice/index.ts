import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { authloginSaga } from './saga';
import { AuthloginState } from './types';

export const initialState: AuthloginState = {
  responseLogin: {},
};

const slice = createSlice({
  name: 'authlogin',
  initialState,
  reducers: {
    loginRequest(state, action: PayloadAction<any>) {},
    loginSuccess(state, action) {
      state.responseLogin = action.payload;
    },
    loginFail(state, action) {
      state.responseLogin = action.payload;
    },
  },
});

export const { actions: authloginActions } = slice;

export const useAuthloginSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: authloginSaga });
  return { actions: slice.actions };
};
