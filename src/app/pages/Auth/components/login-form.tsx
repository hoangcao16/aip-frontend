import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

// import { FormComponentProps } from 'antd/es/form';
import Styled from './../styled/loginStyled';
import BG_VIDEO from 'app/assets/images/imagesGuide/bg_video.mp4';
import LOGO_LOGIN from 'app/assets/images/imagesGuide/logo-login.png';

// interface IProps extends FormComponentProps {
//   onLogin(username: string, password: string): void;
//   loading: boolean;
// }

export const Login = props => {
  const { getFieldDecorator } = props.form;

  const submit = (e: any) => {
    e.preventDefault();

    props.form.validateFields((err, values) => {
      if (!err) {
        props.onLogin(values.username, values.password);
      }
    });
  };
  // if (localStorage.getItem('token')) {
  //   window.location.href = '/';
  // }
  return (
    <Styled.Container>
      <div className="bg-video">
        {/* <img src={logo} alt="Logo Rang Dong" /> */}
        {/* <span className="name">BỘ KẾ HOẠCH & ĐẦU TƯ</span> */}
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
              <h3 className="title">Login to your account</h3>
              {/* Check form */}
              <form onSubmit={submit}>
                <Form.Item label="Username">
                  {getFieldDecorator('username', {
                    initialValue: '',
                    rules: [
                      {
                        required: true,
                        message: 'Vui lòng điền tên đăng nhập',
                      },
                    ],
                    normalize: value => value.trim(),
                  })(
                    <Input
                      autoFocus={true}
                      allowClear
                      placeholder="User name"
                    />,
                  )}
                </Form.Item>
                <Form.Item label="Password">
                  {getFieldDecorator('password', {
                    initialValue: '',
                    rules: [
                      {
                        required: true,
                        message: 'Vui lòng điền mật khẩu',
                      },
                    ],
                  })(
                    <Input.Password
                      type="password"
                      placeholder="Your password"
                    />,
                  )}
                </Form.Item>
                {/* <Form.Item>
                <Checkbox checked={data.remember} onChange={handleChange}>
                  Lưu mật khẩu
                </Checkbox>
              </Form.Item> */}
                <Form.Item>
                  <Button
                    block={true}
                    type="primary"
                    htmlType="submit"
                    disabled={props.loading}
                  >
                    {props.loading ? 'Vui lòng đợi...' : 'Login now'}
                  </Button>
                </Form.Item>
                {/* <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}

                

              </Form.Item> */}
                <Link
                  className="float-right"
                  to="/forget"
                  style={{ float: 'right' }}
                >
                  Forgot password?
                </Link>

                <p>
                  Don’t have an account? <Link to="/register">Signup</Link>
                </p>
              </form>

              <div>
                <a
                  href="/"
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    display: 'block',
                    marginTop: '30px',
                    fontSize: '16px',
                  }}
                >
                  Back to home
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Styled.Container>
  );
};

export default Login;
