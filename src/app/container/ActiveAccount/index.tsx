/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useActiveaccountSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveaccount } from './slice/selectors';
import { Container } from './style';
import { Row, Col } from 'antd';
import BG_VIDEO from 'app/assets/images/imagesGuide/bg_video.mp4';
import LOGO_LOGIN from 'app/assets/images/imagesGuide/logo-login.png';
const ActiveAccountContainer = () => {
  let navigate = useNavigate();
  const { userActiveId } = useParams();
  const { actions } = useActiveaccountSlice();
  const { isActive } = useSelector(selectActiveaccount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.activeAccountRequest(userActiveId));
  }, [userActiveId]);
  useEffect(() => {
    if (isActive === true) {
      navigate('/login');
      dispatch(actions.resetState());
    }
  }, [isActive]);
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
            <h1>Active Account</h1>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default ActiveAccountContainer;
