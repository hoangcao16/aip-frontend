import styled from 'styled-components';

const Styled = {
  DashboardPage: styled.div`
    .data {
      h2,
      h3 {
        font-size: 2.8rem;
        line-height: 4rem;
        font-weight: 600;
        color: ${({ theme }) => theme.neutral_900};
      }
      h2 {
        margin-top: 3rem;
        margin-bottom: 2.4rem;
      }
      .ant-card-body {
        padding: 1.6rem;
      }
      .card-info {
        display: flex;
        margin-top: 1.6rem;
      }
      span {
        border-radius: 50%;
        width: 3.2rem;
        height: 3.2rem;
      }
      p {
        color: ${({ theme }) => theme.neutral_900};
        font-size: 1.4rem;
        line-height: 3rem;
        margin-left: 1.2rem;
      }
      .ant-card-bordered {
        border-color: ${({ theme }) => theme.neutral_300};
        border-radius: 4px;
      }
    }
    .chart-table {
      margin-top: 3.6rem;
      .ant-table-column-title {
        font-size: 1.4rem;
        line-height: 2rem;
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
      margin-top: 2.2rem;
      margin-bottom: 2rem;
      .ant-tabs-nav {
        width: 100% !important;
        padding: 0 !important;
        margin-bottom: 0px;
        &::before {
          border-bottom: 0;
        }
      }
      .chart_line {
        margin-top: 8rem;
      }
      .ant-tabs-tab {
        padding: 2px 0;
      }

      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {
        width: 0 !important;
      }
      .ant-tabs-nav-container {
        margin-bottom: 6rem;
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
        min-width: 15rem;
      }
      .ant-tabs .ant-tabs-nav .ant-tabs-ink-bar {
        &::after {
          border: 0 !important;
        }
      }
      .ant-tabs-tab {
        margin: 0;
        color: ${({ theme }) => theme.neutral_600};
        font-size: 1.4rem;
        line-height: 2rem;
        &:first-child {
          border-right: 1px solid ${({ theme }) => theme.neutral_400} !important;
        }
      }
      .ant-tabs-nav {
        background-color: ${({ theme }) => theme.neutral_white};
      }
      .ant-tabs-content-holder {
        border-left: 0;
        min-height: 300px !important;
        padding: 0px;
      }
    }

    @media screen and (min-width: 1024px) {
      .chart {
        .chart_line .line {
          height: 40rem !important;
        }
      }
    }

    @media screen and (max-width: 1439px) {
      .data {
        .ant-card-body {
          height: 13.2rem;
        }
      }
    }

    @media screen and (max-width: 1279px) {
      .data {
        .ant-card-body {
          padding: 1.4rem;
        }
      }
    }
    @media screen and (max-width: 1023px) {
      .data {
        .ant-card-bordered {
          margin-bottom: 8px;
        }
      }
      .chart {
        .chart_line .line {
          height: 30rem !important;
        }
        .ant-card-body {
          padding: 1.8rem;
        }
        .chart_line {
          margin-top: 6rem;
        }
      }
    }
    @media screen and (max-width: 767px) {
      .chart {
        .chart_line .line {
          height: 25rem !important;
        }
        .ant-tabs-nav {
          display: block;
          .ant-select {
            margin-top: 1rem;
          }
        }
        .ant-card-body {
          padding: 1.2rem;
        }
        .chart_line {
          margin-top: 5rem;
        }
      }
    }
  `,
};
export default Styled;
