import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  .has-error .ant-form-explain,
  .has-error .ant-form-split {
    // color: #fff;
  }
  .bg-video {
    video {
      object-fit: cover;
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
    }
  }
  .loginContent {
    width: 100%;
    height: 100vh;
    position: relative;
    max-width: 100%;
    min-height: 250px;
    // color: #fff;
    box-sizing: border-box;
    .ant-form-item {
      flex-direction: column;
      .ant-form-item-label {
        text-align: left;
      }
    }
    .ant-form-item-label > label {
      color: #979797;
      &:before,
      &:after {
        display: none;
      }
    }
    .login-logo {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .login-form {
      background-color: white;
      height: 100%;
    }
    .title {
      font-weight: 600;
      font-size: 28px;
      line-height: 40px;
      color: #1e262e;
      margin-bottom: 40px;
    }
    .form-content {
      width: 62%;
      margin-left: 15%;
      margin-top: 15%;
    }
  }
  .selectContent {
    width: 400px;
    max-width: 100%;
    min-height: 250px;
    background-color: #fff;
    padding: 40px;
    // color: #fff;
    box-sizing: border-box;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.35);
    border-radius: 8px;
    .ant-form-item-label > label {
      color: #979797;
      &:before,
      &:after {
        display: none;
      }
    }
    .title {
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      // color: #fff;
      text-transform: uppercase;
      text-align: center;
    }
    .ant-btn-primary {
      width: 100%;
    }
    margin: 30px;
  }
  .ant-btn-primary {
    color: #fff;
    height: 56px;
    background-color: #c0292c;
    border-color: #c0292c;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    &:hover {
      background-color: #a52022;
      border-color: #a52022;
    }
    font-weight: 600;
    margin-top: 36px;
  }
  .ant-input {
    height: 56px;
  }
  .ant-form-item-label > label {
    font-size: 14px;
    font-weight: 600;
    color: #404e5c !important;
  }
  .float-right {
    font-size: 14px;
    text-decoration: underline;
  }
  .ant-alert {
    margin-bottom: 64px;
  }

  a {
    font-size: 14px;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #02a7f0;
    border-color: #02a7f0;
  }
  .ant-checkbox-indeterminate .ant-checkbox-inner:after {
    background-color: #02a7f0;
    border-color: #02a7f0;
  }
  .ant-checkbox-input:focus + .ant-checkbox-inner,
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner {
    border-color: #02a7f0;
  }
  .form-button {
    margin-bottom: 36px;
  }
  .ant-input-affix-wrapper {
    border: 1px solid ${({ theme }) => theme.neutral_500};
    &:hover {
      border-color: ${({ theme }) => theme.neutral_900};
    }
  }
  .ant-input-affix-wrapper-focused {
    box-shadow: 0 0 0 2px #1e262e33;
  }
`;
export const FormItem = styled.div`
  /* margin-bottom: 24px; */
  .formitem-label {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    margin: 12px 0px;
    color: ${({ theme }) => theme.neutral_700};
  }
  .formitem-input {
    border-radius: 4px;
  }
  .error {
    border-color: ${({ theme }) => theme.primary_600};
  }
`;
export const GGReCaptcha = styled.div`
  margin-top: 24px;
`;
