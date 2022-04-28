import BG_VIDEO from 'app/assets/images/imagesGuide/bg_video.mp4';
import LOGO_LOGIN from 'app/assets/images/imagesGuide/logo-login.png';
import { Container, FormItem, GGReCaptcha } from './style';
import { Input, Button, Row, Col, Checkbox, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { selectAuthregister } from 'app/container/RegisterContainer/slice/selectors';
import { useAuthregisterSlice } from 'app/container/RegisterContainer/slice';
import ReCAPTCHA from 'react-google-recaptcha';
import PhoneInput from 'react-phone-number-input';
import { InfoCircleFilled } from '@ant-design/icons';

const text = (
  <ul>
    <li>Minimum 8 characters, Maximum 20 characters</li>
    <li>Have at least 1 upper case character</li>
    <li>Have at least 1 lower case character</li>
    <li>Have at least 1 special character</li>
  </ul>
);

const RegisterContainer = () => {
  const { isLoading } = useSelector(selectAuthregister);
  const dispatch = useDispatch();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { actions } = useAuthregisterSlice();
  const [recaptcha_response, setRecaptcha]: any = useState('');

  console.log(recaptchaRef);

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // submit form
  const [phone, setPhone] = useState('');

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
                      required: 'Enter your email address',
                      pattern: {
                        value:
                          /^[a-zA-Z0-9]+([_\.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([_-]?[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,4}){1,2}$/,
                        message:
                          'Your email is not valid, please check it again!',
                      },
                    }}
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <>
                        <div className="formitem-label">
                          <label htmlFor="email">
                            Email address *{' '}
                            <Tooltip
                              placement="top"
                              title={
                                'Email address is your username to log-in in the future'
                              }
                            >
                              <InfoCircleFilled />
                            </Tooltip>
                          </label>
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
                        <p className="validation">{errors?.email?.message}</p>
                      </>
                    )}
                  />
                </FormItem>
                <FormItem>
                  <Controller
                    rules={{
                      required: {
                        value: true,
                        message: 'Enter password',
                      },
                      pattern: {
                        value:
                          /^(?=.*[0-9])(?=.*[!@#$%^&*<>?/_-])[a-zA-Z0-9!@#$%^&*<>?/_-]{8,20}$/,
                        message: 'Password is invalid',
                      },
                    }}
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <>
                        <div className="formitem-label">
                          <label htmlFor="password">
                            Password *
                            <Tooltip placement="top" title={text}>
                              <InfoCircleFilled />
                            </Tooltip>
                          </label>
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
                        <p className="validation">
                          {errors?.password?.message}
                        </p>
                      </>
                    )}
                  />
                </FormItem>
                <FormItem>
                  <Controller
                    rules={{
                      required: {
                        value: true,
                        message: 'Re-enter password',
                      },
                      validate: value => {
                        if (watch('password') !== value) {
                          return 'Your passwords do no match';
                        }
                      },
                    }}
                    name="confirm"
                    control={control}
                    render={({ field }) => (
                      <>
                        <div className="formitem-label">
                          <label htmlFor="confirm">Re-enter password *</label>
                        </div>
                        <Input.Password
                          {...field}
                          className={
                            errors?.confirm
                              ? 'formitem-input error'
                              : 'formitem-input'
                          }
                          type="password"
                          id="confirm"
                          placeholder="Re-enter password"
                          onBlur={handleConfirmBlur}
                        />
                        <p className="validation">{errors?.confirm?.message}</p>
                      </>
                    )}
                  />
                </FormItem>
                <Checkbox>
                  I read & agreed with Terms and Privacy Policy
                </Checkbox>
                <FormItem>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <>
                        <div className="formitem-label">
                          <label htmlFor="confirm">Phone number</label>
                        </div>
                        <PhoneInput
                          defaultCountry="VN"
                          value={phone}
                          onChange={() => setPhone}
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
