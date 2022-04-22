import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.authregister || initialState;

export const selectAuthregister = createSelector([selectSlice], state => state);
