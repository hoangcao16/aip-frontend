import React from 'react';
import { Col, Menu, Row } from 'antd';
import { Link } from 'react-router-dom';
import LOGO from 'app/assets/images/imagesGuide/logo.png';
import Styled from './styled';

function HeaderDashboard() {
  return (
    <Styled.HeaderDashboard>
      <Row justify="center" className="header-dasboard">
        <Col className="logo" span={6}>
          <Link to={'/'}>
            <img src={LOGO} alt="logo" />
          </Link>
        </Col>
        <Col span={18}>
          <Menu mode="horizontal">
            <Menu.Item key="feature">
              <Link to={'/'}>Homepage</Link>
            </Menu.Item>
            <Menu.Item key="documentation">
              <Link to={'/documentation'}>Documentation</Link>
            </Menu.Item>
            <Menu.Item className="userInfo" key="user">
              Tuấn
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Styled.HeaderDashboard>
  );
}

export default HeaderDashboard;
