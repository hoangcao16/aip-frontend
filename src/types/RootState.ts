import { ThemeState } from 'styles/theme/slice/types';
import { AuthloginState } from 'app/container/LoginContainer/slice/types';
import { AuthregisterState } from 'app/container/RegisterContainer/slice/types';
export interface RootState {
  theme?: ThemeState;
  authlogin?: AuthloginState;
  authregister?: AuthregisterState;
}
