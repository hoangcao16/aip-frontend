import styled from 'styled-components';

const Styled = {
  HeaderDashboard: styled.div`
    .header-dasboard {
      // width: 1440px;
      height: 80px !important;
      margin: 0 auto;
      display: flex;
      margin-left: auto;
      text-align: center;
      justify-content: center;
      box-shadow: 0px 2px 20px 0px #0000001a;
      z-index: 1000;
      position: relative !important;
      .logo {
        display: flex;
        align-self: center;
        padding-left: 2.5rem;
      }
      .ant-menu-horizontal {
        display: flex;
        align-items: center;
        border-bottom: 0;
        height: 100%;
        justify-content: end;
        .ant-menu-item {
          vertical-align: baseline;
          border-bottom: 0;
          a {
            font-size: 1.6rem;
            color: ${({ theme }) => theme.neutral_600};
            font-weight: 600;
          }
          &:after {
            border-bottom: 0;
          }
        }
        .ant-menu-item-selected {
          a {
            color: ${({ theme }) => theme.primary_700} !important;
            font-weight: 600;
          }
          &:hover {
            border: 0;
          }
          &:after {
            border: 0;
          }
        }
        .ant-menu-item-selected.console {
          a {
            color: ${({ theme }) => theme.neutral_white} !important;
            font-weight: 400;
          }
        }
        .ant-menu-item-active {
          color: ${({ theme }) => theme.primary_700} !important;
          border-bottom: 0;
          &:hover {
            border-bottom: 0;
            font-weight: 600;
          }
          &:after {
            border-bottom: 0;
          }
          a {
            color: ${({ theme }) => theme.primary_700};
          }
        }
      }
      .user {
        height: 100%;
        display: flex;
        align-items: center;

        a {
          color: ${({ theme }) => theme.neutral_900};
          font-weight: 600;
          font-size: 1.6rem;
          line-height: 2.4rem;
          border-left: 1px solid ${({ theme }) => theme.neutral_400};
          padding-left: 2rem;
        }
        .anticon svg {
          font-size: 2.4rem;
          margin-top: -1rem;
          margin-left: 0.5rem;
        }
      }
    }
  `,
};
export default Styled;
