import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Footer from 'app/components/Footer/Footer';
import Header from 'app/components/Header/Header';
// import { RootState } from 'types/RootState';
import DocumentationPage from './components/DocumentationPage';

const Documentation = () => {
  return (
    <div>
      <Header isLogin={false} />
      <DocumentationPage />
      <Footer />
    </div>
  );
};
// const mapStateToProps = (state: RootState) => {
//   return {
//     isLogin: !!state.auth.auth?.data,
//   };
// };

// const connector = connect(mapStateToProps, {});
// type PropsFromRedux = ConnectedProps<typeof connector>;

export default Documentation;
