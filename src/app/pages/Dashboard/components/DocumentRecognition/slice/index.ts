import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { recognitionSaga } from './saga';
import { RecognitionState } from './types';

export const initialState: RecognitionState = {
  isLoading: false,
  data: null,
};

const slice = createSlice({
  name: 'recognition',
  initialState,
  reducers: {
    recognitionIdRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    recognitionIdSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    recognitionIdFail(state, action: PayloadAction<any>) {
      state.isLoading = false;
    },
    recognitionPassportRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    recognitionPassportSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    recognitionPassportFail(state, action: PayloadAction<any>) {
      state.isLoading = false;
    },
    recognitionDriversRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    recognitionDriversSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    recognitionDriversFail(state, action: PayloadAction<any>) {
      state.isLoading = false;
    },
    reloadData(state, action: PayloadAction<any>) {
      state.data = null;
    },
  },
});

export const { actions: recognitionActions } = slice;

export const useRecognitionSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: recognitionSaga });
  return { actions: slice.actions };
};
