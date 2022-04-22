import styled from 'styled-components';

const Styled = {
  DashboardPage: styled.div`
    .data {
      h2,
      h3 {
        font-size: 28px;
        line-height: 40px;
        font-weight: 600;
        color: ${({ theme }) => theme.neutral_900};
      }
      h2 {
        margin-top: 30px;
      }
      .ant-card-body {
        padding: 16px;
      }
      .card-info {
        display: flex;
        margin-top: 16px;
      }
      span {
        border-radius: 50%;
        width: 32px;
        height: 32px;
      }
      p {
        color: ${({ theme }) => theme.neutral_900};
        font-size: 14px;
        line-height: 30px;
        margin-left: 12px;
      }
      .ant-card-bordered {
        border-color: ${({ theme }) => theme.neutral_300};
        border-radius: 4px;
      }
    }
    .chart-table {
      .ant-table-column-title {
        font-size: 14px;
        font-weight: 600;
        color: ${({ theme }) => theme.neutral_900};
      }
      .ant-table-thead {
        .total {
          color: #0061cc;
        }
        .successApi {
          color: #21874a;
        }
        .clientErrors,
        .systemErrors {
          color: #c0292c;
        }
      }
    }
    .chart {
      margin-top: 20px;
      .ant-tabs-nav {
        width: 100% !important;
        padding: 0 !important;
        margin-bottom: 35px;
        &::before {
          border-bottom: 0;
        }
      }
      .ant-tabs-tab {
        padding: 2px 0;
      }

      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {
        width: 0 !important;
      }
      .ant-tabs-nav-container {
        margin-bottom: 60px;
      }

      .ant-tabs-nav-list {
        border: 1px solid ${({ theme }) => theme.neutral_400};
        border-radius: 4px;
        padding: 0px 1px;
      }

      .ant-tabs-tab-active.ant-tabs-tab {
        font-weight: 500 !important;
        color: ${({ theme }) => theme.neutral_900} !important;
        margin-right: 0 !important;
        border: 0 !important;
        background-color: ${({ theme }) => theme.neutral_100} !important;
        .ant-tabs-tab-btn {
          color: ${({ theme }) => theme.neutral_900} !important;
          &:focus {
            color: ${({ theme }) => theme.neutral_900} !important;
          }
        }
      }
      .ant-tabs-tab-btn {
        min-width: 160px;
      }
      .ant-tabs .ant-tabs-nav .ant-tabs-ink-bar {
        &::after {
          border: 0 !important;
        }
      }
      .ant-tabs-tab {
        margin: 0;
        color: ${({ theme }) => theme.neutral_600};
        font-size: 14px;
        line-height: 20px;
        &:first-child {
          border-right: 1px solid ${({ theme }) => theme.neutral_400} !important;
        }
      }
      .ant-tabs-content-holder {
        border-left: 0;
        min-height: 300px !important;
        padding: 0px;
      }
    }
  `,
};
export default Styled;
