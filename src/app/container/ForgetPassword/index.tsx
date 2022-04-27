import { Container, FormItem } from './style';
import { Form, Input, Button, Row, Col, Alert } from 'antd';
import { Link } from 'react-router-dom';
import BG_VIDEO from 'app/assets/images/imagesGuide/bg_video.mp4';
import LOGO_LOGIN from 'app/assets/images/imagesGuide/logo-login.png';
import { useForm, Controller } from 'react-hook-form';
import { selectForgetpassword } from './slice/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useForgetpasswordSlice } from './slice';
const ForgetPasswordContainer = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectForgetpassword);
  const { actions } = useForgetpasswordSlice();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // submit form
  const onSubmit = data => {
    dispatch(actions.forgetPasswordRequest(data));
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
            <div className="form-content">
              <h3 className="title" style={{ marginBottom: '16px' }}>
                Reset your password
              </h3>
              <Alert
                message="Please enter email address below. We will send you a link to reset password"
                type="info"
                showIcon
              />
              <form onSubmit={handleSubmit(onSubmit)}>
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

                <Form.Item>
                  <Button
                    block={true}
                    type="primary"
                    htmlType="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Vui lòng đợi...' : 'Send request'}
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
    </Container>
  );
};
export default ForgetPasswordContainer;
