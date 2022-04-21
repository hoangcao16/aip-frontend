import styled from 'styled-components';

const Styled = {
  CustomTabs: styled.div`
    .custom-tabs {
      height: 100%;
      width: 100%;
      .ant-tabs > .ant-tabs-nav,
      .ant-tabs > div > .ant-tabs-nav {
        width: 20%;
      }
      .ant-tabs > .ant-tabs-nav {
        width: 20% !important;
        border-right: 0;
        padding-top: 30px;
      }
      .ant-tabs .ant-tabs-nav .ant-tabs-tab {
        text-align: left;
        color: $neutral-600;
        padding: 16px 32px;
        margin-bottom: 0;
      }
      .ant-tabs .ant-tabs-nav .ant-tabs-ink-bar {
        left: 0;
        width: 4px;
        background-color: $primary-600;
        &::after {
          content: '';
          position: absolute;
          border-top: 5px solid transparent;
          border-left: 6px solid $primary-600;
          border-bottom: 5px solid transparent;
          right: -6px;
          transform: translateY(-50%);
          top: 50%;
        }
      }
      .ant-tabs-nav .ant-tabs-tab-active {
        color: $primary-600 !important;
        font-weight: 500 !important;
      }
      .ant-tabs .ant-tabs-left-content {
        border-left: 1px solid $neutral-300;
        padding-left: 60px;
        padding-top: 30px;
        padding-right: 60px;
        min-height: 500px;
      }
    }
  `,
};
export default Styled;
