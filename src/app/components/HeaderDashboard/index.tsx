import React from 'react';
import { Col, Menu, Row } from 'antd';
import { Link } from 'react-router-dom';
import LOGO from 'app/assets/images/imagesGuide/logo.png';
import Styled from './styled';
import { UserOutlined } from '@ant-design/icons';

function HeaderDashboard() {
  const user: any = localStorage.getItem('user');
  const name = JSON.parse(user);

  return (
    <Styled.HeaderDashboard>
      <Row justify="center" className="header-dasboard">
        <Col className="logo" xs={6}>
          <Link to={'/'}>
            <img src={LOGO} alt="logo" />
          </Link>
        </Col>
        <Col xs={14} lg={15} xl={16}>
          <Menu mode="horizontal">
            <Menu.Item key="feature">
              <Link to={'/'}>Homepage</Link>
            </Menu.Item>
            <Menu.Item key="documentation">
              <Link to={'/documentation'}>Documentation</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col xs={4} lg={3} xl={2}>
          <div className="user">
            <Link to={'/manage'}>
              <span>{name?.user?.full_name}</span> <UserOutlined />
            </Link>
          </div>
        </Col>
      </Row>
    </Styled.HeaderDashboard>
  );
}

export default HeaderDashboard;
