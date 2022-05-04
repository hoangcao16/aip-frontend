import styled from 'styled-components';

const Styled = {
  TryDemo: styled.div`
    h2 {
      padding-top: 3rem;
      font-size: 2.8rem;
      line-height: 4rem;
      font-weight: 600;
      color: ${({ theme }) => theme.neutral_900};
    }
    .ant-tabs-tab + .ant-tabs-tab {
      margin-left: 1rem;
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
        padding: 0.8rem;
        & > p {
          text-align: right !important;
          color: ${({ theme }) => theme.neutral_900};
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
        padding: 0.8rem;
        span {
          color: ${({ theme }) => theme.secondary_600};
          font-weight: 600;
        }
      }
    }
    .execute {
      margin-top: 1rem;
      &__image {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 4%;
      }
      &__button {
        margin: 5rem auto 0;
        text-align: center;
        width: 45%;
      }
      .passport-button {
        width: 48%;
        display: flex;
        align-items: flex-end;
        margin-bottom: 2px;
      }
      &__button,
      .passport-button {
        .ant-btn {
          height: 5.6rem;
          width: 20rem;
          span {
            font-size: 1.8rem;
            line-height: 2.8rem;
            font-weight: 700;
            color: $neutral-500;
          }
        }
      }

      .result {
        margin-top: 3rem;
        .ant-card-bordered {
          border-color: ${({ theme }) => theme.neutral_400};
          border-radius: 4px;
        }
        .ant-card-head-title {
          font-weight: 700;
          font-size: 1.8rem;
          line-height: 2.8rem;
          color: ${({ theme }) => theme.neutral_900};
        }
        .ant-btn {
          /* height: 3.6rem; */
          height: 100%;
          border: 2px solid ${({ theme }) => theme.secondary_600};
          color: ${({ theme }) => theme.secondary_600};
          span {
            font-weight: 600;
            font-size: 1.4rem;
            line-height: 2rem;
          }
          &:hover {
            background-color: ${({ theme }) => theme.secondary_100};
          }
        }
        .ant-card-body {
          min-height: 30rem;
          background-color: ${({ theme }) => theme.neutral_100};
          border-top: 1px solid ${({ theme }) => theme.neutral_400};
          margin-bottom: 1px;
          pre {
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2rem;
            color: ${({ theme }) => theme.neutral_800};
          }

          .ant-spin-spinning {
            position: absolute;
            top: 50%;
            left: 50%;
          }
          .ant-spin-lg .ant-spin-dot {
            font-size: 3.6rem;
          }
        }
      }
    }

    @media screen and (max-width: 767px) {
      .execute {
        &__image {
          display: block;
        }
      }
    }
  `,
};
export default Styled;
