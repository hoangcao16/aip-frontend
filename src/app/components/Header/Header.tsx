import React, { useState } from 'react';
import { Col, Menu, Row, Popover, Button } from 'antd';
import { Link } from 'react-router-dom';
// import { getToken } from '../../helpers/token';
// import { RootState } from 'src/redux/reducers';
// import { connect, ConnectedProps } from 'react-redux';
// import ChangePasswordModal from '../../modules/Auth/components/ChangePasswordModal';
// import { logout, showChangePasswordForm } from '../../modules/Auth/redux/actions';
import LOGO from '../../assets/images/imagesGuide/logo.png';
import Styled from './styled';
// const mapState = ({
//   auth: {
//     auth: { data: auth },
//   },
// }: RootState) => ({
//   auth,
// });
// const connector = connect(mapState, {
//   showChangePasswordForm,
//   logout,
// });
interface ParentProps {
  isLogin: boolean;
}

// type PropsFromRedux = ConnectedProps<typeof connector>;
interface IProps extends ParentProps {}

function Header(props: IProps) {
  // console.log('login', props.isLogin);
  const [visiblePopover, setVisiblePopover] = useState<boolean>(false);
  const [current, setCurrent] = useState(() => {
    return localStorage.getItem('current')
      ? `${localStorage.getItem('current')}`
      : 'feature';
  });

  // const content = (
  //   <ul style={{ width: 160 }} className="popup-popover">
  //     <li>
  //       <Link to={'/selection'}>Access dashboard</Link>
  //     </li>
  //     <li>
  //       <Link onClick={() => changePassword()} to="#">
  //         Manage account inf
  //       </Link>
  //     </li>
  //     <li>
  //       <Link onClick={() => logout()} to="">
  //         Log out
  //       </Link>
  //     </li>
  //   </ul>
  // );

  // const logout = () => {
  //   props.logout();
  // };

  // const changePassword = () => {
  //   setVisiblePopover(false);
  //   props.showChangePasswordForm();
  // };

  const handleVisibleChange = (visible: any) => {
    setVisiblePopover(visible);
  };

  const handleClick = (e: any) => {
    localStorage.setItem('current', e.key);
    setCurrent(e.key);
  };

  return (
    <Styled.Header>
      <Row justify="center" className="header">
        <Col className="logo" span={6}>
          <Link
            to={'/'}
            onClick={() => {
              localStorage.setItem('current', 'feature');
              setCurrent('feature');
            }}
          >
            <img src={LOGO} alt="logo" />
          </Link>
        </Col>
        <Col span={18}>
          <Menu
            mode="horizontal"
            onClick={handleClick}
            selectedKeys={[current]}
          >
            <Menu.Item key="feature">
              <Link to={'/'}>Feature</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to={'/'}>About us</Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link to={'/'}>Contact us</Link>
            </Menu.Item>
            <Menu.Item key="documentation">
              <Link to={'/documentation'}>Documentation</Link>
            </Menu.Item>
            <div>
              {props.isLogin === false && (
                <Button size="large">
                  <Link to={'/login'}>Console</Link>
                </Button>
              )}
            </div>
          </Menu>
        </Col>
      </Row>
    </Styled.Header>
  );
}

export default Header;
