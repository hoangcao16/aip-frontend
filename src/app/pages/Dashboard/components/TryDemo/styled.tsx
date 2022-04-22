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
      p {
        text-align: right !important;
        color: ${({ theme }) => theme.secondary_900};
        padding: 8px;
        span {
          color: ${({ theme }) => theme.secondary_600};
          font-weight: 600;
        }
      }
      .execute {
        margin-top: 10px;
        &__image {
          display: flex;
          justify-content: space-between;
          gap: 10%;
        }
        &__button {
          margin: 50px auto;
          text-align: center;
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
      }
    }
  `,
};
export default Styled;
