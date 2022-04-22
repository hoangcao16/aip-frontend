import React, { useEffect } from 'react';
import ForgetPasswordForm from './components/forgetPassword-form';
// import * as actions from '../redux/actions';
import { connect, ConnectedProps } from 'react-redux';
// import { RootState } from '../../../redux/reducers';
// import env from 'src/configs/env';
import Loading from 'app/components/Loading';

// // with redux
// const mapState = ({ auth: { auth, forget } }: RootState) => ({
//   auth,
//   forget
// });
// const connector = connect(mapState, actions);
// type PropsFromRedux = ConnectedProps<typeof connector>;

// interface IProps extends PropsFromRedux { }

function ForgetPasswordPage(props) {
  useEffect(() => {
    document.title = 'Quên mật khẩu';
  }, []);

  const onForget = (value: any) => {
    props.forget(value);
  };

  return (
    <>
      <ForgetPasswordForm onForget={onForget} loading={false} />
      {/* {props.auth.loading ? <Loading /> : null} */}
      {props.forget.loading ? <Loading /> : null}
    </>
  );
}

export default ForgetPasswordPage;
