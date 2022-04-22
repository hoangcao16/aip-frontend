import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.forgetpassword || initialState;

export const selectForgetpassword = createSelector(
  [selectSlice],
  state => state,
);
