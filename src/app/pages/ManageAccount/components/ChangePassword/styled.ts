import styled from 'styled-components';
export const Container = styled.div`
  .info {
    width: 45%;
    margin-left: 25%;
    position: relative;

    h2 {
      padding-top: 30px;
      padding-bottom: 36px;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 0.4px;
      text-transform: uppercase;
    }

    .form-button {
      height: 56px;
      background-color: ${({ theme }) => theme.primary_600};
      width: 85px;
      color: ${({ theme }) => theme.neutral_white};
      margin-top: 10px;
      position: absolute;
      right: 0;
    }
  }
`;
export const FormItem = styled.div`
  margin-bottom: 30px;
  .formitem-label {
    margin: 12px 0px;
    color: ${({ theme }) => theme.neutral_800};
    label {
      font-weight: 600;
      font-size: 14px !important;
      line-height: 20px !important;
    }
  }
  .error {
    border-color: ${({ theme }) => theme.primary_600} !important;
  }
  .ant-input-affix-wrapper {
    height: 56px;
    border-radius: 4px;
  }
  .PhoneInput {
    input {
      height: 56px;
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.neutral_500};
    }
    &--focus input {
      outline: 0;
      border-color: #40a9ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }
`;
