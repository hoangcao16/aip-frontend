import styled from 'styled-components';

const Styled = {
  Feedback: styled.div`
    .feedback {
      margin-bottom: 3rem;
      h2 {
        font-size: 2.8rem;
        line-height: 4rem;
        color: ${({ theme }) => theme.neutral_900};
        font-weight: 600;
        margin: 0;
        margin-top: 3.4rem;
      }
      & > p {
        color: ${({ theme }) => theme.neutral_600};
        font-size: 1.4rem;
        line-height: 2rem;
      }
      &__send {
        margin-top: 4.4rem;
        .form-radio {
          margin-bottom: 3.6rem;
        }
        .form-input-title {
          margin-bottom: 1.2rem;
        }
        .form-input-message {
          margin-bottom: 3.6rem;
          padding: 0 1.6rem 2.8rem 0;
          border: 1px solid #cad4df;
          border-radius: 4px;
          &:focus-within,
          &:hover {
            border: 1px solid ${({ theme }) => theme.secondary_400};
          }
          .ant-input-textarea-show-count:after {
            color: ${({ theme }) => theme.neutral_600};
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2rem;
          }
        }
        h3 {
          color: ${({ theme }) => theme.neutral_900};
          font-size: 1.4rem;
          line-height: 2rem;
          font-weight: 600;
          margin: 0 0 1.2rem 0;
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
          height: 5.6rem;
          font-size: 1.6rem;
          border-radius: 4px;
          &:hover {
            border-color: ${({ theme }) => theme.secondary_600};
          }
          &:focus {
            box-shadow: none;
          }
        }
        .input-message {
          font-size: 1.6rem;
          /* &:hover {
            border-color: ${({ theme }) => theme.secondary_600};
          } */
          /* &:focus {
            box-shadow: none;
          } */
          textarea {
            border: none;
          }
        }
        .submit {
          background-color: ${({ theme }) => theme.secondary_600};
          height: 5.6rem;
          width: 20rem;
          span {
            font-size: 1.8rem;
            line-height: 2.8rem;
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
