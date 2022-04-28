import { Col, Row } from 'antd';
import React from 'react';
// import './footer.scss';
import LOGO from '../../assets/images/imagesGuide/logo-footer.png';
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import Styled from './styled';

function Footer() {
  return (
    <Styled.Footer>
      <div className="footer">
        <Row justify="center" style={{ height: '100%' }}>
          <Col xs={22} md={9}>
            <div className="logo">
              <img
                src={LOGO}
                alt="logo"
                className="logo__image"
                style={{ height: '1.8rem' }}
              />
            </div>
          </Col>
          <Col xs={22} sm={12} md={7} xl={5}>
            <div className="contact">
              <h2 className="contact__title">Contact</h2>
              <div className="contact__content">
                <div className="contact__item contact__address">
                  <EnvironmentOutlined />
                  <p>
                    No.9 Lan 4, Duy Tan Street, Dich Vong Hau Ward, Cau Giay
                    District, Hanoi, Vietnam
                  </p>
                </div>
                <div className="contact__item">
                  <MailOutlined />
                  <p>contact@edsolabs.com</p>
                </div>
                <div className="contact__item contact__phone">
                  <PhoneOutlined />
                  <p>0246 673 7978</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={22} sm={10} md={6} lg={5}>
            <div className="terms">
              <h2 className="terms__title">Terms</h2>
              <div>
                <p className="terms__item">Term & Conditions</p>
                <p className="terms__item">Privacy</p>
                <p className="terms__item">Conditions of payment menthod</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={22} lg={21} xl={19}>
            <p className="copyright">Copyright @2022</p>
          </Col>
        </Row>
      </div>
    </Styled.Footer>
  );
}

export default Footer;
