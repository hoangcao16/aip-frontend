import styled from 'styled-components';

const Styled = {
  AccessToken: styled.div`
    .token {
      h2 {
        font-size: 28px;
        line-height: 40px;
        color: ${({ theme }) => theme.neutral_900};
        font-weight: 600;
        margin-top: 30px;
      }
      .ant-alert-warning {
        background-color: transparent;
        border: 0;
        width: 50%;
        padding: 0;
        padding-bottom: 0;
        margin-bottom: 68px;
        .ant-alert-message {
          color: ${({ theme }) => theme.neutral_900};
          font-size: 14px;
          line-height: 20px;
        }
        .ant-alert-icon {
          left: 2px;
        }
      }
      h2 {
        font-weight: 600;
        color: ${({ theme }) => theme.neutral_900};
      }
      &__id,
      &__key {
        input {
          height: 56px;
          width: 100%;
          border: 1px solid ${({ theme }) => theme.neutral_400};
          padding: 16px 18px;
          box-sizing: border-box;
          border-radius: 4px;
          background-color: ${({ theme }) => theme.neutral_100};
          outline: none;
        }
      }
      &__input {
        margin-top: 12px;
        margin-bottom: 32px;
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
          width: 56px;
          height: 56px;
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
          font-size: 22px;
        }
      }
      &__access {
        .access-data {
          border: 1px solid ${({ theme }) => theme.neutral_400};
          border-radius: 4px;
          background-color: ${({ theme }) => theme.neutral_100};
          padding: 16px;
          position: relative;
          .eye {
            border-radius: 0;
            border-right: 0;
            border-top: 0;
          }
          .copy {
            border-radius: 0 4px 0px 0;
            border-right: 0;
            border-top: 0;
          }
        }
      }
    }
  `,
  Label: styled.div`
    color: ${({ theme }) => theme.neutral_900};
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
  `,
  Not: styled.span`
    font-weight: 600;
  `,
};
export default Styled;
