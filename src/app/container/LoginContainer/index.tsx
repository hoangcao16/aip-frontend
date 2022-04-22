import React, { useState } from 'react';
import { Input, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Container, FormItem } from './style';
import BG_VIDEO from 'app/assets/images/imagesGuide/bg_video.mp4';
import LOGO_LOGIN from 'app/assets/images/imagesGuide/logo-login.png';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
const LoginContainer = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // submit form
  const onSubmitLogin = data => {
    console.log(data);
  };
  return (
    <>
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
                <h3 className="title">Login</h3>
                {/* Check form */}
                <form onSubmit={handleSubmit(onSubmitLogin)}>
                  <FormItem>
                    <Controller
                      rules={{
                        required: true,
                      }}
                      name="username"
                      control={control}
                      render={({ field }) => (
                        <>
                          <div className="formitem-label">
                            <label htmlFor="username">Username</label>
                          </div>
                          <Input
                            {...field}
                            className="formitem-input"
                            autoFocus={true}
                            allowClear
                            id="username"
                            placeholder="User name"
                          />
                        </>
                      )}
                    />
                  </FormItem>
                  <FormItem>
                    <Controller
                      rules={{
                        required: true,
                      }}
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <>
                          <div className="formitem-label">
                            <label htmlFor="password">Password</label>
                            <Link
                              className="float-right"
                              to="/forget"
                              style={{ float: 'right' }}
                            >
                              Forgot password?
                            </Link>
                          </div>
                          <Input.Password
                            {...field}
                            className="formitem-input"
                            type="password"
                            id="password"
                            placeholder="Your password"
                          />
                        </>
                      )}
                    />
                  </FormItem>
                  <Button
                    block={true}
                    type="primary"
                    htmlType="submit"
                    disabled={loading}
                    className="form-button"
                  >
                    {loading ? 'Vui lòng đợi...' : 'Login now'}
                  </Button>

                  <p>
                    Don’t have an account? <Link to="/register">Signup</Link>
                  </p>
                </form>

                {/* <div>
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
                </div> */}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default LoginContainer;
