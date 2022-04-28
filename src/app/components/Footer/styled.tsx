import styled from 'styled-components';

const Styled = {
  Footer: styled.footer`
    .footer {
      height: 400px;
      background-color: ${({ theme }) => theme.neutral_800};
      padding: 7.5rem 0;
      color: white;
      position: relative;

      .copyright {
        position: absolute;
        bottom: 0;
        margin: 0;
      }
      .logo {
        height: 100%;
      }
      h2 {
        font-size: 1.8rem;
        line-height: 2.8rem;
        color: ${({ theme }) => theme.neutral_200};
        text-transform: uppercase;
        font-weight: 700;
      }
      .contact {
        width: 100%;
        height: 100%;
        margin-left: auto;
        &__item {
          display: flex;
          align-items: center;
        }
        p {
          margin: 0;
          padding-left: 1rem;
        }
        &__address {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          margin-top: 2.7rem;
        }
        &__phone {
          margin-top: 3rem;
        }
      }
      .terms {
        width: 65%;
        // text-align: end;
        margin-left: auto;
        &__title {
          margin-bottom: 2rem;
          margin-left: auto;
        }
        &__item {
          margin-bottom: 3rem;
        }
      }

      @media screen and (max-width: 767px) {
        padding: 4rem 0;
        .logo {
          text-align: center;
        }
        .copyright {
          left: 50%;
          transform: translateX(-50%);
        }
      }
      @media (max-width: 575px) {
        padding-bottom: 2rem;
        .contact {
          &__title {
            margin-top: 1rem;
          }
          &__address {
            margin-top: 1rem;
            margin-bottom: 0.5rem;
          }
          &__phone {
            margin-top: 1rem;
          }
        }
        .terms {
          width: 100%;
          margin-bottom: 2.5rem;
          &__title {
            margin-bottom: 1rem;
          }
          &__item {
            margin-bottom: 0.3rem;
          }
        }
      }
    }
  `,
};
export default Styled;
