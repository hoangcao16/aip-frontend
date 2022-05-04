/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const ManageAccount = lazyLoad(
  () => import('./index'),
  module => module.ManageAccount,
);
