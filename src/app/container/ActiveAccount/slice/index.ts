import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { activeaccountSaga } from './saga';
import { ActiveaccountState } from './types';

export const initialState: ActiveaccountState = {
  isLoading: false,
};

const slice = createSlice({
  name: 'activeaccount',
  initialState,
  reducers: {
    activeAccountRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    activeAccountSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
    },
    activeAccountFail(state, action: PayloadAction<any>) {
      state.isLoading = false;
    },
  },
});

export const { actions: activeaccountActions } = slice;

export const useActiveaccountSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: activeaccountSaga });
  return { actions: slice.actions };
};
