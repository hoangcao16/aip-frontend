import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { updatepasswordSaga } from './saga';
import { UpdatepasswordState } from './types';

export const initialState: UpdatepasswordState = {
  isLoading: false,
  data: {},
};

const slice = createSlice({
  name: 'updatepassword',
  initialState,
  reducers: {
    updatePasswordRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    updatePasswordSuccess(state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
    updatePasswordFail(state, action) {
      state.isLoading = false;
    },
  },
});

export const { actions: updatepasswordActions } = slice;

export const useUpdatepasswordSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: updatepasswordSaga });
  return { actions: slice.actions };
};
