import { lazyLoad } from 'utils/loadable';

export const LoginPage = lazyLoad(
  () => import('./login'),
  module => module.LoginPage,
);
export const RegisterPage = lazyLoad(
  () => import('./register'),
  module => module.RegisterPage,
);
export const ForgetPasswordPage = lazyLoad(
  () => import('./forgetPassword'),
  module => module.ForgetPasswordPage,
);
export const UpdatePasswordPage = lazyLoad(
  () => import('./updatePassword'),
  module => module.UpdatePasswordPage,
);
export const ActiveAccountPage = lazyLoad(
  () => import('./activeAccount'),
  module => module.ActiveAccountPage,
);
