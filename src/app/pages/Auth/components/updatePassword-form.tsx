import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

// import { FormComponentProps } from 'antd/es/form';
import Styled from '../styled/loginStyled';
import BG_VIDEO from 'app/assets/images/imagesGuide/bg-video.mp4';
import LOGO_LOGIN from 'app/assets/images/imagesGuide/logo-login.png';

// interface IProps extends FormComponentProps {
//   onUpdate(values: any): void;
//   loading: boolean;
//   id: string;
// }

export const UpdatePassword = props => {
  const { getFieldDecorator } = props.form;
  const [data, setData] = useState({ remember: true });
  const [requirePassword, setRequirePassword] = useState(false);
  const [confirmDirty, setConfirmDirty] = useState(false);

  const submit = (e: any) => {
    e.preventDefault();

    props.form.validateFields((err, values) => {
      if (!err) {
        values = {
          ...values,
          id: props.id,
        };
        props.onUpdate(values);
      }
    });
  };

  const compareToFirstPassword = (rule: any, value: string, callback: any) => {
    const { form } = props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Mật khẩu không giống');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule: any, value: string, callback: any) => {
    const { form } = props;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  const handleConfirmBlur = (e: any) => {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value);
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
              <h3 className="title">Xác thực</h3>
              {/* Check FORM */}
              <form onSubmit={submit}>
                <Form.Item label="Mật khẩu" hasFeedback>
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
                  })(<Input.Password autoComplete="new-password" />)}
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
                  })(<Input.Password onBlur={handleConfirmBlur} />)}
                </Form.Item>

                <Form.Item>
                  <Button
                    block={true}
                    type="primary"
                    htmlType="submit"
                    disabled={props.loading}
                  >
                    {props.loading ? 'Vui lòng đợi...' : 'Thay đổi'}
                  </Button>
                </Form.Item>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </Styled.Container>
  );
};

export default UpdatePassword;
