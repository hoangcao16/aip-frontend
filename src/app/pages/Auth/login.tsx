import { useEffect } from 'react';
import Loading from 'app/components/Loading';
import LoginContainer from 'app/container/LoginContainer';
import { useSelector } from 'react-redux';
import { selectAuthlogin } from 'app/container/LoginContainer/slice/selectors';
export function LoginPage() {
  const { isLoading } = useSelector(selectAuthlogin);
  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <>
      <LoginContainer />
      {isLoading ? <Loading /> : null}
    </>
  );
}
