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
        width: 20%;
        border-right: 0;
        padding-top: 30px;
      }
      .ant-tabs .ant-tabs-tab-btn {
        text-align: left;
        color: ${({ theme }) => theme.neutral_600};
        padding: 8px 10px;
        margin: 0;
      }
      .ant-tabs-left > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab {
        margin: 0;
      }
      .ant-tabs .ant-tabs-nav .ant-tabs-ink-bar {
        left: 0;
        width: 4px;
        background-color: ${({ theme }) => theme.primary_600};
        &::after {
          content: '';
          position: absolute;
          border-top: 5px solid transparent;
          border-left: 6px solid ${({ theme }) => theme.primary_600};
          border-bottom: 5px solid transparent;
          right: -6px;
          transform: translateY(-50%);
          top: 50%;
        }
      }
      .ant-tabs-nav .ant-tabs-tab-active {
        span {
          color: ${({ theme }) => theme.primary_600} !important;
          font-weight: 500 !important;
        }
      }
      .ant-tabs-tab-btn {
        .anticon svg {
          margin-top: -7px;
        }
      }

      // .ant-tabs-tab-btn:active,
      // .ant-tabs-tab-btn:focus {
      //   color: ${({ theme }) => theme.primary_600};
      // }
      .ant-tabs-content-holder {
        // border-left: 1px solid ${({ theme }) => theme.neutral_300};
        padding-left: 60px;
        padding-top: 0px;
        padding-right: 60px;
        min-height: calc(100vh - 80px);

        .ant-tabs-tabpane {
          padding: 0;
        }
      }
    }
  `,
};
export default Styled;
