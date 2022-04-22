import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.authlogin || initialState;

export const selectAuthlogin = createSelector([selectSlice], state => state);
