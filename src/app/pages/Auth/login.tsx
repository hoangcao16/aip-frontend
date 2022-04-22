import React, { useEffect } from 'react';
// import Loading from 'app/components/Loading';
import LoginContainer from 'app/container/LoginContainer';

export function LoginPage(props) {
  useEffect(() => {
    document.title = 'Đăng Nhập';
  }, []);

  return (
    <>
      <LoginContainer />
      {/* <LoginForm onLogin={onLogin} loading={false} /> */}
      {/* {props.auth.loading ? <Loading /> : null} */}
    </>
  );
}
