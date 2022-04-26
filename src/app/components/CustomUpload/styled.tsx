import styled from 'styled-components';

const Styled = {
  CustomUpload: styled.div`
    width: 48%;
    .ant-upload.ant-upload-select-picture-card {
      width: 100%;
      height: 330px;
      margin: 0;
      .anticon svg {
        font-size: 80px;
        color: #e4e5e8;
      }
      .ant-upload-text {
        color: ${({ theme }) => theme.neutral_700};
        margin-top: 20px;
      }
      img {
        width: auto !important;
        height: 100%;
      }
    }
  `,
};
export default Styled;
