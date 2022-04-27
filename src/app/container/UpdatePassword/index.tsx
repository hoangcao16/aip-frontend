import { Container, FormItem } from './style';
import { Input, Button, Row, Col } from 'antd';
import BG_VIDEO from 'app/assets/images/imagesGuide/bg_video.mp4';
import LOGO_LOGIN from 'app/assets/images/imagesGuide/logo-login.png';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { selectUpdatepassword } from 'app/container/UpdatePassword/slice/selectors';
import { useParams } from 'react-router-dom';
import { useUpdatepasswordSlice } from './slice';
const UpdatePasswordContainer = () => {
  const dispatch = useDispatch();
  const { actions } = useUpdatepasswordSlice();
  let { id } = useParams();
  const { isLoading } = useSelector(selectUpdatepassword);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // submit form
  const onSubmit = data => {
    const dataSend = {
      ...data,
      id,
    };
    dispatch(actions.updatePasswordRequest(dataSend));
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
            <div className="form-content">
              <h3 className="title">Reset password</h3>
              {/* Check FORM */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormItem>
                  <Controller
                    rules={{
                      required: {
                        value: true,
                        message: 'Enter new password',
                      },
                      minLength: {
                        value: 8,
                        message: 'Mật khẩu phải có ít nhất 8 ký tự',
                      },
                    }}
                    name="new_password"
                    control={control}
                    render={({ field }) => (
                      <>
                        <div className="formitem-label">
                          <label htmlFor="new_password">New password</label>
                        </div>
                        <Input.Password
                          {...field}
                          className={
                            errors?.new_password
                              ? 'formitem-input error'
                              : 'formitem-input'
                          }
                          type="password"
                          id="new_password"
                          placeholder="New password"
                        />
                        {errors?.new_password && (
                          <p className="validation">
                            {errors?.new_password?.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </FormItem>
                <FormItem>
                  <Controller
                    rules={{
                      required: {
                        value: true,
                        message: 'Re-enter new password',
                      },
                      minLength: {
                        value: 8,
                        message: 'Mật khẩu phải có ít nhất 8 ký tự',
                      },
                    }}
                    name="re_enter"
                    control={control}
                    render={({ field }) => (
                      <>
                        <div className="formitem-label">
                          <label htmlFor="re_enter">
                            Re-enter new password
                          </label>
                        </div>
                        <Input.Password
                          {...field}
                          className={
                            errors?.re_enter
                              ? 'formitem-input error'
                              : 'formitem-input'
                          }
                          type="password"
                          id="re_enter"
                          placeholder="Re-enter password"
                          onBlur={handleConfirmBlur}
                        />
                        {errors?.re_enter && (
                          <p className="validation">
                            {errors?.re_enter?.message}
                          </p>
                        )}
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
                  {isLoading ? 'Loading...' : 'Submit'}
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
