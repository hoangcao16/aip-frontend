import styled from 'styled-components';
export const Container = styled.div`
  .info {
    width: 45%;
    margin-left: 25%;
    position: relative;

    h2 {
      padding-top: 3rem;
      padding-bottom: 3.6rem;
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.8rem;
      letter-spacing: 0.4px;
      text-transform: uppercase;
    }

    .form-button {
      height: 5.6rem;
      background-color: ${({ theme }) => theme.primary_600};
      width: 9rem;
      color: ${({ theme }) => theme.neutral_white};
      margin-top: 1rem;
      position: absolute;
      right: 0;
    }

    @media screen and (max-width: 1279px) {
      width: 55%;
      margin-left: 20%;
    }
    @media screen and (max-width: 1023px) {
      width: 65%;
      margin-left: 15%;
    }
    @media screen and (max-width: 767px) {
      width: 75%;
      margin-left: 10%;
    }
    @media screen and (max-width: 575px) {
      width: 95%;
      margin-left: 2%;
    }
  }
`;
export const FormItem = styled.div`
  margin-bottom: 3rem;
  .formitem-label {
    margin: 1.2rem 0px;
    color: ${({ theme }) => theme.neutral_800};
    label {
      font-weight: 600;
      font-size: 1.4rem !important;
      line-height: 2rem !important;
    }
  }
  .error {
    border-color: ${({ theme }) => theme.primary_600} !important;
  }
  .ant-input-affix-wrapper {
    height: 5.6rem;
    border-radius: 4px;
  }
  .PhoneInput {
    input {
      height: 5.6rem;
      padding: 1rem;
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.neutral_500};
      &:hover {
        border-color: ${({ theme }) => theme.secondary_600};
      }
    }
    &--focus input {
      outline: 0;
      border-color: ${({ theme }) => theme.secondary_600};
    }
  }
`;
