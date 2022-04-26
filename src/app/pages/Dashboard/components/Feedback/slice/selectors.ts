import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.feedback || initialState;

export const selectFeedback = createSelector([selectSlice], state => state);
