import React, { useEffect } from 'react';
import LoginForm from './components/login-form';
import * as actions from './../redux/actions';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import env from 'src/configs/env';
import Loading from 'src/components/Loading';

// with redux
const mapState = ({ auth: { auth } }: RootState) => ({
  auth
});
const connector = connect(mapState, actions);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface IProps extends PropsFromRedux { }

function LoginPage(props: IProps) {
  useEffect(() => {
    document.title = env.pageTitle + 'Đăng Nhập';
  }, []);

  const onLogin = (username: string, password: string) => {
    props.login({ username, password });
  };

  return (
    <>
      <LoginForm onLogin={onLogin} loading={false} />
      {props.auth.loading ? <Loading /> : null}
    </>
  )
}

export default connector(LoginPage);
