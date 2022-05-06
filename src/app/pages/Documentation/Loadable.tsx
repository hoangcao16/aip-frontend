/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const Documentation = lazyLoad(
  () => import('./index'),
  module => module.Documentation,
);
