import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Alert } from 'antd';
import { Link } from 'react-router-dom';

// import { FormComponentProps } from 'antd/es/form';
import Styled from '../styled/loginStyled';
import BG_VIDEO from 'app/assets/images/imagesGuide/bg_video.mp4';
import LOGO_LOGIN from 'app/assets/images/imagesGuide/logo-login.png';

// interface IProps extends FormComponentProps {
//   onForget(values: any): void;
//   loading: boolean;
// }

export const ForgetPassword = props => {
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
        console.log('values  ', values);
        props.onForget(values);
      }
    });
  };

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
              <h3 className="title" style={{ marginBottom: '16px' }}>
                Reset your password
              </h3>
              <Alert
                message="Please enter email address below. We will send you a link to reset password"
                type="info"
                showIcon
              />
              {/* check form */}
              <form onSubmit={submit}>
                <Form.Item>
                  {getFieldDecorator('email', {
                    rules: [
                      {
                        type: 'email',
                        message: 'Nhập địa chỉ E-mail!',
                      },
                      {
                        required: false,
                        message: 'Nhập địa chỉ E-mail!',
                      },
                    ],
                  })(<Input placeholder="Your email" />)}
                </Form.Item>

                <Form.Item>
                  <Button
                    block={true}
                    type="primary"
                    htmlType="submit"
                    disabled={props.loading}
                  >
                    {props.loading ? 'Vui lòng đợi...' : 'Send request'}
                  </Button>
                </Form.Item>
                <span>
                  <Link to={'/login'} style={{ textDecoration: 'underline' }}>
                    Back to login
                  </Link>
                </span>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </Styled.Container>
  );
};

export default ForgetPassword;
