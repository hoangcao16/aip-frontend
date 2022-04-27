import styled from 'styled-components';

const Styled = {
  Feedback: styled.div`
    .feedback {
      h2 {
        font-size: 28px;
        line-height: 40px;
        color: ${({ theme }) => theme.neutral_900};
        font-weight: 600;
        margin: 0;
        margin-top: 34px;
      }
      & > p {
        color: ${({ theme }) => theme.neutral_600};
        font-size: 14px;
        line-height: 20px;
      }
      &__send {
        margin-top: 44px;
        .form-radio {
          margin-bottom: 36px;
        }
        .form-input-title {
          margin-bottom: 12px;
        }
        .form-input-message {
          margin-bottom: 36px;
          padding: 0 16px 28px 0;
          border: 1px solid #cad4df;
          border-radius: 4px;
          &:focus-within,
          &:hover {
            border: 1px solid ${({ theme }) => theme.secondary_400};
          }
          .ant-input-textarea-show-count:after {
            color: ${({ theme }) => theme.neutral_600};
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
          }
        }
        h3 {
          color: ${({ theme }) => theme.neutral_900};
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          margin: 0 0 12px 0;
        }
        .ant-radio-wrapper {
          span {
            color: ${({ theme }) => theme.neutral_900};
          }
        }
        .ant-radio-wrapper.ant-radio-wrapper-checked {
          span {
            color: ${({ theme }) => theme.secondary_600};
          }
        }
        .input-title {
          height: 56px;
          font-size: 16px;
          border-radius: 4px;
          /* margin-top: 10px; */
        }
        .input-message {
          font-size: 16px;
          textarea {
            border: none;
            &:focus {
              box-shadow: none;
            }
          }
        }
        .submit {
          background-color: ${({ theme }) => theme.secondary_600};
          height: 56px;
          width: 200px;
          span {
            font-size: 18px;
            line-height: 28px;
            font-weight: 700;
          }
          &:hover {
            background-color: ${({ theme }) => theme.secondary_700};
          }
        }
      }
    }
  `,
};
export default Styled;
