import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { authregisterSaga } from './saga';
import { AuthregisterState } from './types';

export const initialState: AuthregisterState = {
  isLoading: false,
  data: {},
};

const slice = createSlice({
  name: 'authregister',
  initialState,
  reducers: {
    registerRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    registerSuccess(state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
    registerFail(state, action) {},
  },
});

export const { actions: authregisterActions } = slice;

export const useAuthregisterSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: authregisterSaga });
  return { actions: slice.actions };
};
