import styled from 'styled-components';

const Styled = {
  IntegrationGuide: styled.div`
    .scroll-layout-guide {
      padding-right: 50px;
      h1 {
        font-size: 28px;
        font-weight: 600;
        line-height: 40px;
        color: ${({ theme }) => theme.neutral_900};
        margin-bottom: 20px;
        margin-top: 40px;
      }
      h2 {
        font-size: 18px;
        line-height: 28px;
        font-weight: 700;
        margin: 0;
        color: ${({ theme }) => theme.neutral_900};
      }
      p {
        color: ${({ theme }) => theme.neutral_900};
        margin-bottom: 60px;
      }
    }

    .ant-anchor-link-title {
      color: ${({ theme }) => theme.neutral_600};
    }

    .ant-anchor-link-active > .ant-anchor-link-title {
      color: ${({ theme }) => theme.neutral_700} !important;
      font-weight: 600 !important;
    }

    .ant-anchor-ink-ball {
      border-color: ${({ theme }) => theme.neutral_700};
    }
  `,
};
export default Styled;
