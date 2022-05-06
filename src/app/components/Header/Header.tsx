import React, { useState } from 'react';
import { Col, Menu, Row, Button, Drawer } from 'antd';
import { Link } from 'react-router-dom';
// import { getToken } from '../../helpers/token';
// import { RootState } from 'src/redux/reducers';
// import { connect, ConnectedProps } from 'react-redux';
// import ChangePasswordModal from '../../modules/Auth/components/ChangePasswordModal';
// import { logout, showChangePasswordForm } from '../../modules/Auth/redux/actions';
import LOGO from '../../assets/images/imagesGuide/logo.png';
import Styled from './styled';
import { ArrowRightOutlined, MenuOutlined } from '@ant-design/icons';
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

function Header() {
  // console.log('login', props.isLogin);
  // const [visiblePopover, setVisiblePopover] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);
  const token = localStorage.getItem('access_token');
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

  // const handleVisibleChange = (visible: any) => {
  //   setVisiblePopover(visible);
  // };

  const handleClick = (e: any) => {
    if (e.key !== 'login') {
      localStorage.setItem('current', e.key);
      setCurrent(e.key);
    } else {
      return;
    }
  };

  return (
    <Styled.Header>
      <Row justify="space-between" className="header">
        <Col className="logo" xs={6} md={4}>
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
        <Col xs={0} md={20} lg={18}>
          <Menu
            mode="horizontal"
            onClick={handleClick}
            selectedKeys={[current]}
          >
            <Menu.Item key="feature">
              <Link to={'/'}>Features</Link>
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
            <Menu.Item className="console" key="login">
              <Button size="large">
                <Link to={`${token ? '/dashboard' : '/login'}`}>Console</Link>
              </Button>
            </Menu.Item>
          </Menu>
        </Col>
        <Col xs={2} md={0}>
          <div className="menu-right">
            <MenuOutlined onClick={() => setVisible(true)} />
          </div>
          <Drawer
            title="SYNODUS"
            placement="right"
            onClose={() => setVisible(false)}
            visible={visible}
            closeIcon={<ArrowRightOutlined />}
            width="50%"
          >
            <Menu onClick={handleClick} selectedKeys={[current]}>
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
              <Menu.Item className="console" key="login">
                <Button size="large">
                  <Link to={`${token ? '/dashboard' : '/login'}`}>Console</Link>
                </Button>
              </Menu.Item>
            </Menu>
          </Drawer>
        </Col>
      </Row>
    </Styled.Header>
  );
}

export default Header;
