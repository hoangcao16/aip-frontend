import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.facematching || initialState;

export const selectFacematching = createSelector([selectSlice], state => state);
