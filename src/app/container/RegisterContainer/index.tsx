import BG_VIDEO from 'app/assets/images/imagesGuide/bg_video.mp4';
import LOGO_LOGIN from 'app/assets/images/imagesGuide/logo-login.png';
import { Container, FormItem, GGReCaptcha } from './style';
import { Input, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { selectAuthregister } from 'app/container/RegisterContainer/slice/selectors';
import { useAuthregisterSlice } from 'app/container/RegisterContainer/slice';
import ReCAPTCHA from 'react-google-recaptcha';
const RegisterContainer = () => {
  const { isLoading } = useSelector(selectAuthregister);
  const dispatch = useDispatch();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { actions } = useAuthregisterSlice();
  const [recaptcha_response, setRecaptcha]: any = useState('');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // submit form
  const onSubmitRegister = data => {
    const sendData = {
      ...data,
      recaptcha_response: recaptcha_response,
    };
    dispatch(actions.registerRequest(sendData));
  };
  const handleConfirmBlur = (e: any) => {
    // setConfirmDirty(confirmDirty || !!value);
  };
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
            <div className="form-content" style={{ marginTop: '5%' }}>
              <h3 className="title">Register</h3>
              <form onSubmit={handleSubmit(onSubmitRegister)}>
                <FormItem>
                  <Controller
                    rules={{
                      required: {
                        value: true,
                        message: 'Vui lòng điền tên đăng nhập',
                      },
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
                          className={
                            errors?.username
                              ? 'formitem-input error'
                              : 'formitem-input'
                          }
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
                      required: {
                        value: true,
                        message: 'Vui lòng điền họ và tên',
                      },
                    }}
                    name="fullname"
                    control={control}
                    render={({ field }) => (
                      <>
                        <div className="formitem-label">
                          <label htmlFor="fullname">Fullname</label>
                        </div>
                        <Input
                          {...field}
                          className={
                            errors?.fullname
                              ? 'formitem-input error'
                              : 'formitem-input'
                          }
                          autoFocus={true}
                          allowClear
                          id="fullname"
                          placeholder="Fullname"
                        />
                      </>
                    )}
                  />
                </FormItem>
                <FormItem>
                  <Controller
                    rules={{
                      required: {
                        value: true,
                        message: 'Nhập địa chỉ E-mail!',
                      },
                    }}
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <>
                        <div className="formitem-label">
                          <label htmlFor="email">Email</label>
                        </div>
                        <Input
                          {...field}
                          className={
                            errors?.email
                              ? 'formitem-input error'
                              : 'formitem-input'
                          }
                          autoFocus={true}
                          allowClear
                          id="email"
                          placeholder="Address your email"
                        />
                      </>
                    )}
                  />
                </FormItem>
                <FormItem>
                  <Controller
                    rules={{
                      required: {
                        value: true,
                        message: 'Nhập mật khẩu',
                      },
                      minLength: {
                        value: 8,
                        message: 'Mật khẩu phải có ít nhất 8 ký tự',
                      },
                    }}
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <>
                        <div className="formitem-label">
                          <label htmlFor="password">Password</label>
                        </div>
                        <Input.Password
                          {...field}
                          className={
                            errors?.password
                              ? 'formitem-input error'
                              : 'formitem-input'
                          }
                          type="password"
                          id="password"
                          placeholder="Your password"
                        />
                      </>
                    )}
                  />
                </FormItem>
                <FormItem>
                  <Controller
                    rules={{
                      required: {
                        value: true,
                        message: 'Nhập mật khẩu',
                      },
                      minLength: {
                        value: 8,
                        message: 'Mật khẩu phải có ít nhất 8 ký tự',
                      },
                    }}
                    name="confirm"
                    control={control}
                    render={({ field }) => (
                      <>
                        <div className="formitem-label">
                          <label htmlFor="confirm">Confirm Password</label>
                        </div>
                        <Input.Password
                          {...field}
                          className="formitem-input"
                          type="password"
                          id="confirm"
                          placeholder="Re-enter password"
                          onBlur={handleConfirmBlur}
                        />
                      </>
                    )}
                  />
                </FormItem>
                <GGReCaptcha>
                  <ReCAPTCHA
                    sitekey="6LfCzZAfAAAAAOoqIvWz5aFypRF3NTIfS4NaSA80"
                    onChange={value => setRecaptcha(value)}
                    ref={recaptchaRef}
                    onExpired={() => {
                      recaptchaRef?.current?.reset(); // reset captcha
                    }}
                  />
                </GGReCaptcha>

                <Button
                  block={true}
                  type="primary"
                  htmlType="submit"
                  disabled={isLoading}
                  className="form-button"
                >
                  {isLoading ? 'Vui lòng đợi...' : 'Submit'}
                </Button>
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
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default RegisterContainer;
