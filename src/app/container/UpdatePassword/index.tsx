import { Container, FormItem } from './style';
import { Input, Button, Row, Col } from 'antd';
import BG_VIDEO from 'app/assets/images/imagesGuide/bg_video.mp4';
import LOGO_LOGIN from 'app/assets/images/imagesGuide/logo-login.png';
import { useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { selectUpdatepassword } from 'app/container/UpdatePassword/slice/selectors';
const UpdatePasswordContainer = () => {
  const { isLoading } = useSelector(selectUpdatepassword);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // submit form
  const onSubmit = data => {};
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
            <div className="form-content">
              <h3 className="title">Xác thực</h3>
              {/* Check FORM */}
              <form onSubmit={handleSubmit(onSubmit)}>
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

                <Button
                  block={true}
                  type="primary"
                  htmlType="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Vui lòng đợi...' : 'Thay đổi'}
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default UpdatePasswordContainer;
