import React, { useEffect } from 'react';
import SingupForm from './components/singup-form';
import * as actions from '../redux/actions';
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

function RegisterPage(props: IProps) {
  useEffect(() => {
    document.title = env.pageTitle + 'Đăng ký';
  }, []);

  const onLogin = (username: string, password: string) => {
    props.login({ username, password });
  };

  const onRegister = (value: any) => {
    props.register(value);
  };

  return (
    <>
      <SingupForm onRegister={onRegister} loading={false} />
      {props.auth.loading ? <Loading /> : null}
    </>
  )
}

export default connector(RegisterPage);
