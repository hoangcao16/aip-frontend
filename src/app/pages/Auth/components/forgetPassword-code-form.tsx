import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

// import { FormComponentProps } from 'antd/es/form';
import Styled from '../styled/loginStyled';
import BG_VIDEO from 'app/assets/images/imagesGuide/bg_video.mp4';
import LOGO_LOGIN from 'app/assets/images/imagesGuide/logo-login.png';

// interface IProps extends FormComponentProps {
//   onCheckOtp(values: any): void;
//   loading: boolean;
//   time: number;
//   id: string;
// }

export const ForgetPasswordCode = props => {
  const { getFieldDecorator } = props.form;
  const [data, setData] = useState({ remember: true });
  const [requirePassword, setRequirePassword] = useState(false);
  const [confirmDirty, setConfirmDirty] = useState(false);

  const handleChange = () => {
    setData({
      ...data,
      remember: !data.remember,
    });
  };

  const submit = (e: any) => {
    e.preventDefault();

    props.form.validateFields((err, values) => {
      if (!err) {
        values = {
          ...values,
          id: props.id,
        };
        props.onCheckOtp(values);
      }
    });
  };

  const calculateTimeLeft = () => {
    let eventTime = props.time / 1000;
    let currentTime = Math.floor(Date.now() / 1000);
    let leftTime = eventTime - currentTime;
    let duration = moment.duration(leftTime, 'seconds');
    let interval = 1000;
    if (duration.asSeconds() <= 0) {
      return '0:0';
    }
    duration = moment.duration(duration.asSeconds() - 1, 'seconds');
    return duration.minutes() + ':' + duration.seconds();
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <Styled.Container>
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
              <h3 className="title">Xác thực</h3>
              {/* check form */}
              <form onSubmit={submit}>
                <Form.Item
                  label={
                    'OTP code. Thời gian mã OTP còn hiệu lực: (' +
                    timeLeft +
                    ')'
                  }
                >
                  {getFieldDecorator('code', {
                    rules: [
                      {
                        required: false,
                        message: 'Nhập mã OTP',
                      },
                    ],
                  })(<Input placeholder="Nhập mã OTP" />)}
                </Form.Item>

                <Form.Item>
                  <Button
                    block={true}
                    type="primary"
                    htmlType="submit"
                    disabled={props.loading}
                  >
                    {props.loading ? 'Vui lòng đợi...' : 'Gửi yêu cầu'}
                  </Button>
                </Form.Item>
                <span>
                  <a className="m-l-5" href="/forget">
                    Nếu không nhận được OTP code hoặc OTP hết hạn
                  </a>
                </span>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </Styled.Container>
  );
};

export default ForgetPasswordCode;
