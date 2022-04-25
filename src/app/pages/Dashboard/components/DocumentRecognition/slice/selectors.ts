import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.recognition || initialState;

export const selectRecognition = createSelector([selectSlice], state => state);
