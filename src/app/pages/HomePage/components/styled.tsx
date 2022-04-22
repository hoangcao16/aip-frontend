import styled from 'styled-components';

const Styled = {
  HomePage: styled.div`
    .homepage {
      padding-left: 30px;
      .line {
        width: 120px;
        height: 8px;
        background-color: ${({ theme }) => theme.secondary_800};
        margin-top: 80px;
      }
      h3 {
        color: ${({ theme }) => theme.neutral_900};
        font-size: 28px;
        line-height: 40px;
        font-weight: 600;
      }
      .info,
      .accuracy,
      .option,
      .sample {
        padding-top: 80px;
      }
      .info {
        &__title {
          font-size: 40px;
          font-weight: 500px !important;
          margin-top: 24px;
          width: 55%;
          line-height: 50px;
        }
        &__desc {
          display: flex;
          justify-content: space-between;
          color: ${({ theme }) => theme.neutral_600};
          p {
            font-size: 18px;
          }
        }
        &__btn {
          height: 48px;
          width: 178px;
          color: ${({ theme }) => theme.secondary_700};
          border: 2px solid ${({ theme }) => theme.secondary_700};
          font-size: 14px;
          font-weight: 600;
          margin-top: 8px;
          &:hover {
            background-color: ${({ theme }) => theme.secondary_100};
          }
        }
      }
      .accuracy {
        position: relative;
        padding-bottom: 120px;
        img {
          width: 100%;
        }
        &__box {
          width: 344px;
          height: 136px;
          padding: 29px 27px;
          background-color: ${({ theme }) => theme.secondary_800};
          position: absolute;
          bottom: 7%;
          left: 7%;
          border-radius: 7px;
          h4 {
            font-size: 18px;
            font-weight: 700px;
            color: ${({ theme }) => theme.neutral_white};
          }
          p {
            color: #e3e3e3;
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
      .line-full {
        width: 100%;
        border-top: 1px solid #d6d6d6;
      }
      .option {
        &__content {
          margin-top: 50px;
        }
        &__heading {
          span {
            font-size: 14px;
            font-weight: 600;
            color: ${({ theme }) => theme.secondary_600};
          }
          h4 {
            font-weight: 600;
            font-size: 28px;
            line-height: 40px;
            padding-right: 100px;
            margin: 24px 0;
          }
        }
        &__list {
          margin-top: 60px;
          border-top: 1px solid #e6e6e6;
        }
        &__item {
          display: flex;
          gap: 12px;
          margin-top: 20px;
          p {
            color: $neutral-800;
          }
        }
        &__type {
          width: 24px;
          height: 24px;
          background-color: ${({ theme }) => theme.warning_500};
          border-radius: 50%;
          position: relative;
          .icon {
            position: absolute;
            color: white;
            font-size: 10px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -30%);
          }
        }
        .anticon svg {
          font-size: 14px;
        }
      }
      // sample
      .sample {
        margin-bottom: 40px;
        &__header {
          display: flex;
          justify-content: space-between;
        }
        &__btn {
          background-color: ${({ theme }) => theme.primary_600};
          width: 172px;
          height: 56px;
          padding: 12px, 24px, 12px, 24px;

          span {
            font-size: 14px;
            color: white;
            font-weight: 600;
          }
          &:hover {
            background-color: ${({ theme }) => theme.primary_700};
          }
        }
        &__content {
          margin-top: 45px;
        }
        &__code {
          width: 100%;
          height: auto;
          background-color: ${({ theme }) => theme.neutral_100};
          border-radius: 2px;
          padding: 24px;
          font-size: 16px;
          p {
            font-size: 16px;
            color: ${({ theme }) => theme.secondary_700};
            font-weight: 700;
          }
        }
        &__carousel {
          width: 92%;
          .anticon svg {
            font-size: 30px;
          }
        }
      }
    }
  `,
};
export default Styled;
