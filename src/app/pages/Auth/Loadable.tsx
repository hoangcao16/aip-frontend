/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const LoginPage = lazyLoad(
  () => import('./login'),
  module => module.LoginPage,
);
export const RegisterPage = lazyLoad(
  () => import('./register'),
  module => module.RegisterPage,
);
