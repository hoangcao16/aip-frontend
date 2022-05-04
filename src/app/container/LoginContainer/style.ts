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
    min-height: 25rem;
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
      .logo-img {
        position: fixed;
        top: 50%;
        left: 25%;
        transform: translate(-50%, -50%) !important;
      }
    }
    .login-form {
      background-color: white;
      /* height: 100%; */
    }
    .title {
      font-weight: 600;
      font-size: 2.8rem;
      line-height: 4rem;
      color: #1e262e;
      margin-bottom: 4rem;
    }
    .form-content {
      width: 62%;
      margin-left: 15%;
      margin-top: 15%;
    }
  }
  .selectContent {
    width: 40rem;
    max-width: 100%;
    min-height: 25rem;
    background-color: #fff;
    padding: 4rem;
    // color: #fff;
    box-sizing: border-box;
    box-shadow: 0px 0.8rem 1rem rgba(0, 0, 0, 0.35);
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
      font-size: 2.4rem;
      line-height: 2.8rem;
      // color: #fff;
      text-transform: uppercase;
      text-align: center;
    }
    .ant-btn-primary {
      width: 100%;
    }
    margin: 3rem;
  }
  .ant-btn-primary {
    color: #fff;
    height: 5.6rem;
    background-color: ${({ theme }) => theme.primary_600};
    border-color: ${({ theme }) => theme.primary_600};
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    &:hover {
      background-color: ${({ theme }) => theme.primary_700};
      border-color: ${({ theme }) => theme.primary_700};
    }
    font-weight: 600;
    margin-top: 3.6rem;
    margin-bottom: 1.6rem;
  }
  .ant-btn-primary[disabled] {
    background-color: ${({ theme }) => theme.neutral_200};
    border-color: ${({ theme }) => theme.neutral_200};
    color: ${({ theme }) => theme.neutral_500};
  }
  .ant-form-item-label > label {
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 600;
    color: #404e5c !important;
  }
  .float-right {
    font-size: 1.4rem;
    line-height: 2rem;
    text-decoration: underline;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary_600};
  }
  .ant-alert {
    margin-bottom: 6.4rem;
  }

  a {
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.secondary_600};
    &:hover {
      color: ${({ theme }) => theme.secondary_500};
    }
  }

  a.signup {
    font-size: 1.6rem;
    line-height: 2.4rem;
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
    margin-bottom: 3.6rem;
  }

  @media screen and (max-width: 1023px) {
    .loginContent {
      .form-content {
        width: 80%;
        margin-left: 10%;
      }
    }
  }
`;
export const FormItem = styled.div`
  margin-bottom: 2.4rem;
  .formitem-label {
    margin-bottom: 1.2rem;
    label {
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 2rem;
      margin: 1.2rem 0px;
      color: ${({ theme }) => theme.neutral_700};
    }
  }
  .formitem-input {
    border-radius: 4px;
    height: 5.6rem;
  }
  .error {
    border-color: ${({ theme }) => theme.primary_600} !important;
  }
  .validation {
    margin-bottom: 0;
    margin-top: 0.6rem;
    text-align: end;
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.primary_600};
  }
`;
