import styled from 'styled-components';

const Styled = {
  TryDemo: styled.div`
    h2 {
      padding-top: 30px;
      font-size: 28px;
      line-height: 40px;
      font-weight: 600;
      color: ${({ theme }) => theme.neutral_900};
    }
    .tabs {
      .ant-tabs-nav {
        padding: 0px !important;
        width: 100% !important;
        .ant-tabs-ink-bar {
          background-color: ${({ theme }) => theme.secondary_600} !important;
        }
      }

      .ant-tabs-tab.ant-tabs-tab-active {
        border-bottom: 0;
        .ant-tabs-tab-btn {
          color: ${({ theme }) => theme.secondary_600};
        }
      }
      .ant-tabs-content-holder {
        padding: 0;
      }
    }
    .ant-tabs .ant-tabs-nav .ant-tabs-ink-bar::after {
      border: 0 !important;
    }
    .ant-tabs-nav {
      background-color: ${({ theme }) => theme.neutral_white} !important;
    }
    .document-recognition {
      .remaining {
        display: flex;
        justify-content: space-between;
        & > p {
          text-align: right !important;
          color: ${({ theme }) => theme.neutral_900};
          padding: 8px;
          span {
            color: ${({ theme }) => theme.secondary_600};
            font-weight: 600;
          }
        }
        .ant-radio-wrapper.ant-radio-wrapper-checked {
          span {
            color: ${({ theme }) => theme.secondary_600};
          }
        }
      }
    }

    .face-matching {
      .remaining {
        text-align: right !important;
        color: ${({ theme }) => theme.secondary_900};
        padding: 8px;
        span {
          color: ${({ theme }) => theme.secondary_600};
          font-weight: 600;
        }
      }
    }
    .execute {
      margin-top: 10px;
      &__image {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 4%;
      }
      &__button {
        margin: 50px auto 0;
        text-align: center;
        width: 45%;
      }
      .passport-button {
        width: 48%;
        display: flex;
        align-items: flex-end;
        margin-bottom: 10px;
      }
      &__button,
      .passport-button {
        .ant-btn {
          height: 56px;
          width: 200px;
          span {
            font-size: 18px;
            line-height: 28px;
            font-weight: 700;
            color: $neutral-500;
          }
        }
      }

      .result {
        margin-top: 30px;
        .ant-card-bordered {
          border-color: ${({ theme }) => theme.neutral_400};
          border-radius: 4px;
        }
        .ant-card-head-title {
          font-weight: 700;
          font-size: 18px;
          line-height: 28px;
          color: ${({ theme }) => theme.neutral_900};
        }
        .ant-btn {
          height: 36px;
          border: 2px solid ${({ theme }) => theme.secondary_600};
          color: ${({ theme }) => theme.secondary_600};
          span {
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
          }
          &:hover {
            background-color: ${({ theme }) => theme.secondary_100};
          }
        }
        .ant-card-body {
          min-height: 300px;
          background-color: ${({ theme }) => theme.neutral_100};
          border-top: 1px solid ${({ theme }) => theme.neutral_400};
          margin-bottom: 1px;
          pre {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: ${({ theme }) => theme.neutral_800};
          }
        }
      }
    }
  `,
};
export default Styled;
