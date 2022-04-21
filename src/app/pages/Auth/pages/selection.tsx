import React, { useEffect } from 'react';
import Selection from './components/selection-form';
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

function SelectionPage(props: IProps) {
  useEffect(() => {
    document.title = env.pageTitle + 'Đăng ký';
  }, []);


  return (
    <>
      <Selection auth={props.auth} />
    </>
  )
}

export default connector(SelectionPage);
