import { useEffect } from 'react';
import Loading from 'app/components/Loading';
import ForgetPasswordContainer from 'app/container/ForgetPassword';
import { selectForgetpassword } from 'app/container/ForgetPassword/slice/selectors';
import { useSelector } from 'react-redux';
export function ForgetPasswordPage(props) {
  const { isLoading } = useSelector(selectForgetpassword);
  useEffect(() => {
    document.title = 'Quên mật khẩu';
  }, []);

  return (
    <>
      <ForgetPasswordContainer />
      {isLoading ? <Loading /> : null}
    </>
  );
}
