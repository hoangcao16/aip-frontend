import styled from 'styled-components';
export const Container = styled.div`
  .documentation {
    margin-top: 80px;
    min-height: 500px;
    margin-bottom: 45px;

    .ant-tabs-tab-active {
      background-color: ${({ theme }) => theme.neutral_100} !important;
    }
  }
`;
