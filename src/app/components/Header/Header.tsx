import React, { useState } from 'react';
import { Col, Menu, Row, Icon, Popover, Button } from 'antd';
import { Link } from 'react-router-dom';
import { getToken } from '../../helpers/token';
import { RootState } from 'src/redux/reducers';
import { connect, ConnectedProps } from 'react-redux';
import ChangePasswordModal from '../../modules/Auth/components/ChangePasswordModal';
import { logout, showChangePasswordForm } from '../../modules/Auth/redux/actions';
import './header.scss';
import LOGO from '../../assets/images/imagesGuide/logo.png';

const mapState = ({
  auth: {
    auth: { data: auth },
  },
}: RootState) => ({
  auth,
});
const connector = connect(mapState, {
  showChangePasswordForm,
  logout,
});
interface ParentProps {
  isLogin: boolean;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
interface IProps extends ParentProps, PropsFromRedux {}

function Header(props: IProps) {
  // console.log('login', props.isLogin);
  const [visiblePopover, setVisiblePopover] = useState<boolean>(false);
  const [current, setCurrent] = useState(() => {
    return localStorage.getItem('current') ? `${localStorage.getItem('current')}` : 'feature';
  });

  const content = (
    <ul style={{ width: 160 }} className="popup-popover">
      <li>
        <Link to={'/selection'}>Access dashboard</Link>
      </li>
      <li>
        <Link onClick={() => changePassword()} to="#">
          Manage account inf
        </Link>
      </li>
      <li>
        <Link onClick={() => logout()} to="">
          Log out
        </Link>
      </li>
    </ul>
  );
  const content2 = (
    <Menu>
      <Menu.Item key="1">
        <Link to={'/admin/user/profile'}>Thay đổi hồ sơ</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link onClick={() => changePassword()} to="#">
          Đổi mật khẩu
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link onClick={() => logout()} to="">
          Đăng xuất
        </Link>
      </Menu.Item>
    </Menu>
  );

  const logout = () => {
    props.logout();
  };

  const changePassword = () => {
    setVisiblePopover(false);
    props.showChangePasswordForm();
  };

  const handleVisibleChange = (visible: any) => {
    setVisiblePopover(visible);
  };

  const handleClick = (e: any) => {
    localStorage.setItem('current', e.key);
    setCurrent(e.key);
  };

  return (
    <Row type="flex" justify="center" className="header">
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
        <Menu mode="horizontal" onClick={handleClick} selectedKeys={[current]}>
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
            {props.isLogin === true && (
              <Popover
                onVisibleChange={handleVisibleChange}
                visible={visiblePopover}
                className="header-user-info"
                placement="bottomLeft"
                content={content}
                trigger="click"
              >
                <p style={{ marginLeft: '20px' }}>
                  {`${props.auth?.user.full_name} `} <Icon type="user" />
                </p>
              </Popover>
            )}
          </div>
        </Menu>
      </Col>
    </Row>
  );
}

export default connector(Header);
