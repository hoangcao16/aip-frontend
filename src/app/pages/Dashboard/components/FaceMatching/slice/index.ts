import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { facematchingSaga } from './saga';
import { FacematchingState } from './types';

export const initialState: FacematchingState = {
  isLoading: false,
  data: null,
};

const slice = createSlice({
  name: 'facematching',
  initialState,
  reducers: {
    faceMatchingRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    faceMatchingSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    faceMatchingFail(state, action: PayloadAction<any>) {
      state.isLoading = false;
    },
  },
});

export const { actions: facematchingActions } = slice;

export const useFacematchingSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: facematchingSaga });
  return { actions: slice.actions };
};
