import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { feedbackSaga } from './saga';
import { FeedbackState } from './types';

export const initialState: FeedbackState = {
  isLoading: false,
  data: {},
};

const slice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    feedbackRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    feedbackSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    feedbackFail(state, action: PayloadAction<any>) {
      state.isLoading = false;
    },
  },
});

export const { actions: feedbackActions } = slice;

export const useFeedbackSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: feedbackSaga });
  return { actions: slice.actions };
};
