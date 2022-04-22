import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { forgetpasswordSaga } from './saga';
import { ForgetpasswordState } from './types';

export const initialState: ForgetpasswordState = {
  isLoading: false,
  data: {},
};

const slice = createSlice({
  name: 'forgetpassword',
  initialState,
  reducers: {
    forgetPasswordRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    forgetPasswordSuccess(state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
    forgetPasswordFail(state, action) {
      state.isLoading = false;
    },
  },
});

export const { actions: forgetpasswordActions } = slice;

export const useForgetpasswordSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: forgetpasswordSaga });
  return { actions: slice.actions };
};
