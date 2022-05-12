import styled from 'styled-components';

const Styled = {
  IntegrationGuide: styled.div`
    position: relative;
    .scroll-layout-guide {
      padding-right: 5rem;
      h1 {
        font-size: 2.8rem;
        font-weight: 600;
        line-height: 4rem;
        color: ${({ theme }) => theme.neutral_900};
        margin-bottom: 2rem;
        margin-top: 4rem;
      }
      h2 {
        font-size: 1.8rem;
        line-height: 2.8rem;
        font-weight: 700;
        margin: 0;
        margin-top: 5rem;
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.neutral_900};
      }
      p {
        color: ${({ theme }) => theme.neutral_900};
        margin-bottom: 1rem;
      }
      table,
      td,
      th {
        border: 1px solid;
      }

      table {
        width: 80%;
        border-collapse: collapse;
        margin-bottom: 1rem;
      }
      td {
        padding: 1rem;
      }

      .table-header {
        td {
          width: 50%;
        }
      }
      .table-body {
        td {
          width: 33.33%;
        }
      }

      .data-json {
        background-color: #f1efee;
        padding: 1rem;
        width: 80%;
      }
    }

    .ant-anchor-wrapper {
      position: fixed;
      margin-top: 3rem;
    }

    .ant-anchor-link-title {
      color: ${({ theme }) => theme.neutral_600};
      font-size: 1.4rem;
      line-height: 2rem;
    }

    .ant-anchor-link-active > .ant-anchor-link-title {
      color: ${({ theme }) => theme.neutral_700} !important;
      font-weight: 600 !important;
    }

    .ant-anchor-ink-ball {
      border-color: ${({ theme }) => theme.neutral_700};
    }

    @media screen and (max-width: 767px) {
      .scroll-layout-guide {
        padding: 0;
      }
    }
  `,
};
export default Styled;
