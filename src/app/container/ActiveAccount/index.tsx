/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useActiveaccountSlice } from './slice';
import { useDispatch } from 'react-redux';
import { Container } from './style';
import { Row, Col } from 'antd';
import BG_VIDEO from 'app/assets/images/imagesGuide/bg_video.mp4';
import LOGO_LOGIN from 'app/assets/images/imagesGuide/logo-login.png';
const ActiveAccountContainer = () => {
  let navigate = useNavigate();
  const { userActiveId } = useParams();
  const { actions } = useActiveaccountSlice();
  const dispatch = useDispatch();
  useEffect(() => {
    const data = {
      userActiveId,
      navigate,
    };
    dispatch(actions.activeAccountRequest(data));
  }, [userActiveId]);
  return (
    <Container>
      <div className="bg-video">
        <video autoPlay loop playsInline muted src={BG_VIDEO} />
      </div>
      <div className="loginContent">
        <Row style={{ height: '100%' }}>
          <Col span={12} className="login-logo">
            <div>
              <img src={LOGO_LOGIN} alt="logo" />
            </div>
          </Col>
          <Col span={12} className="login-form">
            <div className="form-content">
              <h3 className="title">Active Account</h3>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default ActiveAccountContainer;
