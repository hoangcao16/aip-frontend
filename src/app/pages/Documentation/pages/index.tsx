import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';
import { RootState } from 'types/RootState';
import DocumentationPage from '../components/DocumentationPage';

const Documentation = (props: PropsFromRedux) => {
  return (
    <div>
      <Header isLogin={props.isLogin} />
      <DocumentationPage />
      <Footer />
    </div>
  );
};
const mapStateToProps = (state: RootState) => {
  return {
    isLogin: !!state.auth.auth?.data,
  };
};

const connector = connect(mapStateToProps, {});
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Documentation);
