import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UpdatePasswordForm from './components/updatePassword-form';
import * as actions from '../redux/actions';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import env from 'src/configs/env';
import Loading from 'src/components/Loading';

// with redux
const mapState = ({ auth: { auth, forget } }: RootState) => ({
  auth,
  forget
});
const connector = connect(mapState, actions);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface IProps extends PropsFromRedux { }

function UpdatePasswordPage(props: IProps) {
  const { id } = useParams();
  useEffect(() => {
    document.title = env.pageTitle + 'Thay đổi mật khẩu';
  }, []);


  const onUpdate = (value: any) => {
    props.updatePass(value);
  };

  return (
    <>
      <UpdatePasswordForm onUpdate={onUpdate} loading={false}  id={id}/>
      {/* {props.auth.loading ? <Loading /> : null} */}
      {props.forget.loading ? <Loading /> : null}
    </>
  )
}

export default connector(UpdatePasswordPage);
