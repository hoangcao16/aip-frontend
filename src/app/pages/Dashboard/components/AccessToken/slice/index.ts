import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { tokenaccessSaga } from './saga';
import { TokenaccessState } from './types';

export const initialState: TokenaccessState = {
  clientId: '',
  clientSecret: '',
};

const slice = createSlice({
  name: 'tokenaccess',
  initialState,
  reducers: {
    getTokenRequest(state) {},
    getTokenSuccess(state, action: PayloadAction<any>) {
      state.clientId = action.payload.client_id;
      state.clientSecret = action.payload.client_secret;
    },
    getTokenFail(state, action: PayloadAction<any>) {},
  },
});

export const { actions: tokenaccessActions } = slice;

export const useTokenaccessSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: tokenaccessSaga });
  return { actions: slice.actions };
};
