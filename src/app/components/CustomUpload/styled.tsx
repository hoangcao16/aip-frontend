import styled from 'styled-components';

const Styled = {
  CustomUpload: styled.div`
    width: 100%;
    .ant-upload.ant-upload-select-picture-card {
      width: 100%;
      height: 330px;
      .anticon svg {
        font-size: 50px;
        color: #e4e5e8;
      }
      .ant-upload-text {
        color: ${({ theme }) => theme.neutral_700};
        margin-top: 20px;
      }
      img {
        width: 100%;
        height: 312px;
      }
    }
  `,
};
export default Styled;
