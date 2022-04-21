import styled from 'styled-components';

const Styled = {
  IntegrationGuide: styled.div`
    .scroll-layout-guide {
      padding-right: 50px;
      h1 {
        font-size: 28px;
        font-weight: 600;
        line-height: 40px;
        color: $neutral-900;
        margin-bottom: 20px;
        margin-top: 40px;
      }
      h2 {
        font-size: 18px;
        line-height: 28px;
        font-weight: 700;
        margin: 0;
        color: $neutral-900;
      }
      p {
        color: $neutral-900;
        margin-bottom: 60px;
      }
    }

    .ant-anchor-link-title {
      color: $neutral-600;
    }

    .ant-anchor-link-active > .ant-anchor-link-title {
      color: $neutral-700 !important;
      font-weight: 600 !important;
    }

    .ant-anchor-ink-ball {
      border-color: $neutral-700;
    }
  `,
};
export default Styled;
