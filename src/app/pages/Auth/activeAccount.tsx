import Loading from 'app/components/Loading';
import ActiveAccountContainer from 'app/container/ActiveAccount';
import { useSelector } from 'react-redux';
import { selectActiveaccount } from 'app/container/ActiveAccount/slice/selectors';
export function ActiveAccountPage() {
  const { isLoading } = useSelector(selectActiveaccount);
  return (
    <>
      <ActiveAccountContainer />
      {isLoading ? <Loading /> : null}
    </>
  );
}
