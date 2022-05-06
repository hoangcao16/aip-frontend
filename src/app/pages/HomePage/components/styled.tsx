import styled from 'styled-components';

const Styled = {
  HomePage: styled.div`
    .homepage {
      /* padding-left: 30px; */
      .line {
        width: 12rem;
        height: 0.8rem;
        background-color: ${({ theme }) => theme.secondary_800};
        margin-top: 8rem;
      }
      h3 {
        color: ${({ theme }) => theme.neutral_900};
        font-size: 2.8rem;
        line-height: 4rem;
        font-weight: 600;
      }
      .info,
      .accuracy,
      .sample {
        padding-top: 8rem;
      }
      .info {
        &__title {
          font-size: 4rem;
          font-weight: 500 !important;
          margin-top: 2.4rem;
          width: 55%;
          line-height: 5.6rem;
        }
        &__desc {
          display: flex;
          justify-content: space-between;
          color: ${({ theme }) => theme.neutral_600};
          p {
            font-size: 1.8rem;
            line-height: 2.8rem;
          }
        }
        &__btn {
          height: 4.8rem;
          width: 17.8rem;
          color: ${({ theme }) => theme.secondary_700};
          border: 2px solid ${({ theme }) => theme.secondary_700};
          font-size: 1.4rem;
          line-height: 2rem;
          font-weight: 600;
          margin-top: 0.8rem;
          &:hover {
            background-color: ${({ theme }) => theme.secondary_100};
          }
        }
      }
      .accuracy {
        position: relative;
        padding-bottom: 12rem;
        img {
          width: 100%;
        }
        &__box {
          width: 30%;
          height: 13.6rem;
          padding: 2.9rem 2.7rem;
          background-color: ${({ theme }) => theme.secondary_800};
          position: absolute;
          bottom: 7%;
          left: 7%;
          border-radius: 7px;
          h4 {
            font-size: 1.8rem;
            line-height: 2.8rem;
            font-weight: 700px;
            color: ${({ theme }) => theme.neutral_white};
          }
          p {
            color: #e3e3e3;
            font-size: 1.4rem;
            line-height: 2rem;
          }
        }
      }
      .line-full {
        width: 100%;
        border-top: 1px solid #d6d6d6;
      }
      .option {
        &__content {
          margin-top: 5rem;
        }
        &__heading {
          span {
            font-size: 1.4rem;
            line-height: 2rem;
            font-weight: 600;
            color: ${({ theme }) => theme.secondary_600};
          }
          h4 {
            font-weight: 600;
            font-size: 2.8rem;
            line-height: 4rem;
            padding-right: 100px;
            margin: 24px 0;
          }
        }
        &__list {
          margin-top: 6rem;
          border-top: 1px solid #e6e6e6;
        }
        &__item {
          display: flex;
          gap: 1.2rem;
          margin-top: 20px;
          p {
            color: $neutral-800;
            margin: 0;
          }
        }
        &__type {
          width: 2.4rem;
          height: 2.4rem;
          background-color: ${({ theme }) => theme.warning_500};
          border-radius: 50%;
          position: relative;
          .icon {
            position: absolute;
            color: white;
            font-size: 1rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -30%);
          }
        }
        .anticon svg {
          font-size: 1.4rem;
        }
      }
      // sample
      .sample {
        margin-bottom: 4rem;
        &__header {
          display: flex;
          justify-content: space-between;
        }
        &__btn {
          background-color: ${({ theme }) => theme.primary_600};
          width: 17.2rem;
          height: 5.6rem;
          span {
            font-size: 1.4rem;
            line-height: 2rem;
            color: white;
            font-weight: 600;
          }
          &:hover {
            background-color: ${({ theme }) => theme.primary_700};
          }
        }
        &__content {
          margin-top: 4.5rem;
        }
        &__code {
          width: 100%;
          height: auto;
          background-color: ${({ theme }) => theme.neutral_100};
          border-radius: 2px;
          padding: 2.4rem;
          p {
            color: ${({ theme }) => theme.secondary_700};
            font-weight: 700;
          }
        }
        &__carousel {
          width: 92%;
          .anticon svg {
            font-size: 3rem;
          }
        }
      }

      @media screen and (max-width: 1440px) {
        .option {
          &__content {
            img {
              height: 100%;
              width: 100%;
            }
          }
        }
        .sample {
          &__code {
            font-size: 1.4rem;
            line-height: 2rem;
          }
          pre {
            margin-bottom: 2.5rem;
          }
        }
      }
      @media screen and (max-width: 1280px) {
        .option {
          &__content {
            img {
              width: 100%;
              height: auto;
            }
          }
          &__list {
            margin-top: 4.5rem;
          }
          &__item {
            margin-top: 1.5rem;
          }
        }
        .sample {
          pre {
            margin: 0;
          }
        }
      }
      @media screen and (max-width: 1023px) {
        .option {
          h4 {
            padding-right: 50px;
          }
        }
        .info {
          &__title {
            width: 65%;
          }
        }
        .accuracy {
          &__box {
            width: 38%;
            height: 13rem;
            bottom: 10%;
            padding: 2.2rem 2rem;
          }
        }
      }
      @media screen and (max-width: 767px) {
        .info {
          &__title {
            width: 100%;
          }
        }
        .sample {
          padding-top: 0;
          &__carousel {
            width: 100%;
          }
        }
        .accuracy {
          &__box {
            width: 45%;
            opacity: 0.9;
            z-index: 10;
            height: 11rem;
            padding: 1.8rem;
            bottom: 14%;
            left: 5%;
          }
        }
        .option {
          .ant-row-space-between {
            justify-content: center;
          }
          &__desc {
            margin-top: 3rem;
          }
          h4 {
            padding-right: 0;
          }
        }
      }
      @media screen and (max-width: 575px) {
        h3 {
          font-size: 2.4rem !important;
          line-height: 3.6rem !important;
        }
        .info {
          &__btn {
            span {
              margin-top: -3px;
            }
          }
        }
        .accuracy {
          &__box {
            width: 48%;
            padding: 1.5rem;
            left: 3%;
            height: 10.5rem;
            bottom: 15%;
          }
        }
      }
      @media screen and (max-width: 374px) {
        .accuracy {
          &__box {
            width: 50%;
            padding: 1rem;
            height: 10rem;
            bottom: 17%;
          }
        }
      }
    }
  `,
};
export default Styled;
