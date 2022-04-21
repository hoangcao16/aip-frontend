import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import { FormComponentProps } from 'antd/es/form';
import Styled from '../styled/loginStyled';
import BG_VIDEO from '../../../../assets/images/imagesGuide/bg_video.mp4';
import LOGO_LOGIN from '../../../../assets/images/imagesGuide/logo-login.png';

interface IProps extends FormComponentProps {
  onRegister(values: any): void;
  loading: boolean;
}

export const Login = (props: IProps) => {
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

  const validateToNextPassword = (rule: any, value: string, callback: any) => {
    const { form } = props;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  const compareToFirstPassword = (rule: any, value: string, callback: any) => {
    const { form } = props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Mật khẩu không giống');
    } else {
      callback();
    }
  };

  const submit = (e: any) => {
    e.preventDefault();

    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('values  ', values);
        props.onRegister(values);
      }
    });
  };

  const handleConfirmBlur = (e: any) => {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value);
  };
  // if (localStorage.getItem('token')) {
  //   window.location.href = '/';
  // }
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
            <div className="form-content" style={{ marginTop: '7%' }}>
              <h3 className="title">Register</h3>
              <Form onSubmit={submit}>
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
                  })(<Input autoFocus={true} placeholder="Username" />)}
                </Form.Item>
                <Form.Item label="Full name">
                  {getFieldDecorator('fullname', {
                    initialValue: '',
                    rules: [
                      {
                        required: true,
                        message: 'Vui lòng điền tên đăng nhập',
                      },
                    ],
                    normalize: value => value,
                  })(<Input autoFocus={true} placeholder="Full name" />)}
                </Form.Item>
                <Form.Item label="Email">
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
                  })(<Input placeholder="Address your email" />)}
                </Form.Item>
                <Form.Item label="Password" hasFeedback>
                  {getFieldDecorator('password', {
                    initialValue: '',
                    rules: [
                      {
                        required: requirePassword,
                        message: 'Nhập mật khẩu',
                      },
                      { min: 8, message: 'Mật khẩu ít nhất 8 ký tự' },
                      {
                        validator: validateToNextPassword,
                      },
                    ],
                  })(<Input.Password autoComplete="new-password" placeholder="Your password" />)}
                </Form.Item>
                <Form.Item label="Confirm Password" hasFeedback>
                  {getFieldDecorator('confirm', {
                    initialValue: '',
                    rules: [
                      {
                        required: requirePassword,
                        message: 'Nhập lại mật khẩu',
                      },
                      { min: 8, message: 'Mật khẩu ít nhất 8 ký tự. ' },
                      {
                        validator: compareToFirstPassword,
                      },
                    ],
                  })(<Input.Password onBlur={handleConfirmBlur} placeholder="Re-enter password" />)}
                </Form.Item>
                <Form.Item>
                  <Button block={true} type="primary" htmlType="submit" disabled={props.loading}>
                    {props.loading ? 'Vui lòng đợi...' : 'Submit'}
                  </Button>
                </Form.Item>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    textDecoration: 'underline',
                  }}
                >
                  <Link to={'/login'}>Login now</Link>
                  <a href="/" style={{ textAlign: 'center' }}>
                    Go back home
                  </a>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Styled.Container>
  );
};

export default Form.create<IProps>()(Login);
