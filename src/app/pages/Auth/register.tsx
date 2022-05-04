import { useEffect } from 'react';
import RegisterContainer from 'app/container/RegisterContainer';
import Loading from 'app/components/Loading';
import { useSelector } from 'react-redux';
import { selectAuthregister } from 'app/container/RegisterContainer/slice/selectors';
export function RegisterPage(props) {
  const { isLoading } = useSelector(selectAuthregister);
  useEffect(() => {
    document.title = 'Register';
  }, []);

  return (
    <>
      <RegisterContainer />
      {isLoading ? <Loading /> : null}
    </>
  );
}
