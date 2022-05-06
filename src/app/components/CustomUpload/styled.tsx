import styled from 'styled-components';

const Styled = {
  CustomUpload: styled.div`
    width: 48%;
    .ant-upload.ant-upload-select-picture-card {
      width: 100%;
      height: 33rem;
      margin: 0;
      .anticon svg {
        font-size: 8rem;
        color: #e4e5e8;
      }
      .ant-upload-text {
        color: ${({ theme }) => theme.neutral_700};
        margin-top: 2rem;
        font-size: 1.4rem;
        line-height: 2rem;
      }
      img {
        width: auto;
        min-height: 31.2rem;
        height: 100%;
        object-fit: contain;
      }
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      margin-bottom: 1rem;
    }
  `,
};
export default Styled;
