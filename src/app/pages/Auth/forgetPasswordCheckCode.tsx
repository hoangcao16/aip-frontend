import React, { useEffect } from 'react';
// import * as actions from '../redux/actions';
import { useParams } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
// import { RootState } from '../../../redux/reducers';
// import env from 'src/configs/env';
import Loading from 'app/components/Loading';
import ForgetPasswordCodeForm from './components/forgetPassword-code-form';

// // with redux
// const mapState = ({ auth: { auth, forget } }: RootState) => ({
//   auth,
//   forget
// });
// const connector = connect(mapState, actions);
// type PropsFromRedux = ConnectedProps<typeof connector>;

// interface IProps extends PropsFromRedux { }

function UpdatePasswordPage(props) {
  const { id, time } = useParams();

  useEffect(() => {
    document.title = 'Quên mật khẩu';
  }, []);

  const onCheckOtp = (value: any) => {
    props.sendOtp(value);
  };
  return (
    <>
      <ForgetPasswordCodeForm
        onCheckOtp={onCheckOtp}
        loading={false}
        time={time}
        id={id}
      />
      {props.forget.loading ? <Loading /> : null}
    </>
  );
}

export default UpdatePasswordPage;
