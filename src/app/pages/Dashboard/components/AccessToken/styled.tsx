import styled from 'styled-components';

const Styled = {
  AccessToken: styled.div`
    .token {
      h2 {
        font-size: 2.8rem;
        line-height: 4rem;
        color: ${({ theme }) => theme.neutral_900};
        font-weight: 600;
        margin-top: 3rem;
      }
      .ant-alert-warning {
        background-color: transparent;
        border: 0;
        width: 60%;
        padding: 0;
        padding-bottom: 0;
        margin-bottom: 6.8rem;
        position: relative;
        .ant-alert-message {
          color: ${({ theme }) => theme.neutral_900};
          font-size: 1.4rem;
          line-height: 2rem;
          margin-left: 2.5rem;
        }
        .ant-alert-icon {
          position: absolute;
          left: 0.2rem;
          top: 0.5rem;
        }
      }
      h2 {
        font-weight: 600;
        color: ${({ theme }) => theme.neutral_900};
      }
      &__id,
      &__key {
        input {
          height: 5.6rem;
          width: 100%;
          border: 1px solid ${({ theme }) => theme.neutral_400};
          padding: 1.6rem 1.8rem;
          box-sizing: border-box;
          border-radius: 4px;
          background-color: ${({ theme }) => theme.neutral_100};
          outline: none;
        }
      }
      &__input {
        margin-top: 1.2rem;
        margin-bottom: 3.2rem;
        width: 50%;
        position: relative;
      }
      .ant-btn:hover {
        border-color: ${({ theme }) => theme.neutral_400};
      }
      .action {
        position: absolute;
        right: 0;
        top: 0;
        button {
          width: 5.6rem;
          height: 5.6rem;
          border-color: ${({ theme }) => theme.neutral_400};
        }
        .eye {
          border-radius: 0 !important;
          border-right: 0;
        }
        .copy {
          border-radius: 0 4px 4px 0 !important;
        }
        .anticon svg {
          font-size: 2.2rem;
          color: ${({ theme }) => theme.neutral_600};
        }
        .password {
          opacity: 0.5;
        }
      }

      @media screen and (max-width: 1279px) {
        &__input {
          width: 55%;
        }
      }
      @media screen and (max-width: 1023px) {
        &__input {
          width: 62%;
        }
        .ant-alert-warning {
          width: 80%;
        }
      }
      @media screen and (max-width: 767px) {
        &__input {
          width: 80%;
        }
        .ant-alert-warning {
          width: 90%;
        }
      }
      @media screen and (max-width: 575px) {
        &__input {
          width: 95%;
        }
        .ant-alert-warning {
          width: 100%;
        }
      }
    }
  `,
  Label: styled.div`
    color: ${({ theme }) => theme.neutral_900};
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 600;
  `,
  Not: styled.span`
    font-weight: 600;
  `,
};
export default Styled;
