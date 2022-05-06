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
        padding-top: 3rem;
      }
      .ant-tabs .ant-tabs-tab-btn {
        text-align: left;
        color: ${({ theme }) => theme.neutral_600};
        padding: 0.8rem 1rem;
        margin: 0;
      }
      .ant-tabs-left > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab {
        margin: 0;
      }
      .ant-tabs .ant-tabs-nav .ant-tabs-ink-bar {
        left: 0;
        width: 0.4rem;
        background-color: ${({ theme }) => theme.primary_600};
        &::after {
          content: '';
          position: absolute;
          border-top: 0.5rem solid transparent;
          border-left: 0.6rem solid ${({ theme }) => theme.primary_600};
          border-bottom: 0.6rem solid transparent;
          right: -0.6rem;
          transform: translateY(-50%);
          top: 50%;
        }
      }
      .ant-tabs-nav .ant-tabs-tab-active {
        // background-color: ${({ theme }) => theme.neutral_white};
        transition: all 0.3s linear;
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
        padding-left: 6rem;
        padding-top: 0px;
        padding-right: 6rem;
        min-height: calc(100vh - 8rem);

        .ant-tabs-tabpane {
          padding: 0;
        }
      }

      @media screen and (max-width: 1279px) {
        .ant-tabs-content-holder {
          padding-left: 5rem;
          padding-right: 5rem;
        }
      }

      @media screen and (max-width: 1023px) {
        .ant-tabs-content-holder {
          padding-left: 4rem;
          padding-right: 4rem;
        }
        .ant-tabs-left > .ant-tabs-nav .ant-tabs-tab {
          padding: 8px 1.2rem;
        }
        .ant-tabs-nav-wrap::after {
          box-shadow: none;
        }
        .ant-tabs-nav {
          width: 22% !important;
        }
      }
      @media screen and (max-width: 767px) {
        .ant-tabs-content-holder {
          padding-left: 3rem;
          padding-right: 3rem;
        }
        .ant-tabs-nav {
          width: 27% !important;
        }
        .ant-tabs-left > .ant-tabs-nav .ant-tabs-tab {
          padding: 6px 1rem;
        }
        .ant-tabs .ant-tabs-nav .ant-tabs-ink-bar {
          width: 0;
          background-color: ${({ theme }) => theme.primary_600};
          &::after {
            border: 0;
          }
        }
      }
      @media screen and (max-width: 575px) {
        .ant-tabs-content-holder {
          padding-left: 2rem;
          padding-right: 2rem;
        }
        .ant-tabs-nav {
          width: 29% !important;
        }
        .ant-tabs-left > .ant-tabs-nav .ant-tabs-tab {
          padding: 5px 1px;
          span {
            font-size: 1.5rem;
          }
        }
      }
    }
  `,
};
export default Styled;
