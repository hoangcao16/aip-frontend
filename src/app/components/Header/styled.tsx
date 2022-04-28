import styled from 'styled-components';

const Styled = {
  Header: styled.div`
    .header {
      // width: 1440px;
      height: 80px !important;
      margin: 0 auto;
      margin-left: auto;
      box-shadow: 0px 2px 20px 0px #0000001a;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      z-index: 1000;
      background-color: white;
      .logo {
        display: flex;
        align-self: center;
        padding-left: 25px;
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
            line-height: 2.4rem;
            color: ${({ theme }) => theme.neutral_600};
            width: 10rem;
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
        .ant-btn {
          background-color: ${({ theme }) => theme.primary_600};
          width: 11rem;
          height: 4.8rem;
          border: 0;
          a {
            color: ${({ theme }) => theme.neutral_white};
            font-size: 1.6rem;
            &:hover {
              color: ${({ theme }) => theme.neutral_white};
            }
          }
          &:hover {
            background-color: ${({ theme }) => theme.primary_700};
            border: 0;
          }
        }
      }
      .menu-right {
        height: 100%;
        display: flex;
        align-items: center;
        .anticon svg {
          font-size: 2.3rem;
        }
      }
    }
  `,
};
export default Styled;
