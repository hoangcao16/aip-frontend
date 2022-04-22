import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.updatepassword || initialState;

export const selectUpdatepassword = createSelector(
  [selectSlice],
  state => state,
);
