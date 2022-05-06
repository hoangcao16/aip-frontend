import { useEffect } from 'react';
import Loading from 'app/components/Loading';
import UpdatePasswordContainer from 'app/container/UpdatePassword';
import { useSelector } from 'react-redux';
import { selectUpdatepassword } from 'app/container/UpdatePassword/slice/selectors';

export function UpdatePasswordPage() {
  const { isLoading } = useSelector(selectUpdatepassword);
  useEffect(() => {
    document.title = 'Reset password';
  }, []);
  return (
    <>
      <UpdatePasswordContainer />
      {isLoading ? <Loading /> : null}
    </>
  );
}
