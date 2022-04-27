import { ThemeState } from 'styles/theme/slice/types';
import { AuthloginState } from 'app/container/LoginContainer/slice/types';
import { AuthregisterState } from 'app/container/RegisterContainer/slice/types';
import { ForgetpasswordState } from 'app/container/ForgetPassword/slice/types';
import { UpdatepasswordState } from 'app/container/UpdatePassword/slice/types';
import { ActiveaccountState } from 'app/container/ActiveAccount/slice/types';
import { RecognitionState } from 'app/pages/Dashboard/components/DocumentRecognition/slice/types';
import { TokenaccessState } from 'app/pages/Dashboard/components/AccessToken/slice/types';
import { FeedbackState } from 'app/pages/Dashboard/components/Feedback/slice/types';
import { FacematchingState } from 'app/pages/Dashboard/components/FaceMatching/slice/types';
export interface RootState {
  theme?: ThemeState;
  authlogin?: AuthloginState;
  authregister?: AuthregisterState;
  forgetpassword?: ForgetpasswordState;
  updatepassword?: UpdatepasswordState;
  activeaccount?: ActiveaccountState;
  recognition?: RecognitionState;
  tokenaccess?: TokenaccessState;
  feedback?: FeedbackState;
  facematching?: FacematchingState;
}
