// import { media } from './media';
import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  html {
    font-size: 10px;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    /* padding-top: ${StyleConstants.NAV_BAR_HEIGHT}; */
    background-color: ${p => p.theme.background};
    font-size: 1.6rem;
  }

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  p,
  label,span {
    line-height: 24px;
    font-size: 1.6rem;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 2.4rem;
    height: 2.4rem;
  }
  .carousel.carousel-slider {
    background-color: ${({ theme }) => theme.neutral_200};
}

.carousel .control-dots {
    z-index: -10 !important;
}

.carousel .slide img {
    width: 70% !important;
    padding: 30px 0;
}

.arrow-left {
    position: absolute;
    top: 50%;
    left: 15px;
    z-index: 10;
}

.arrow-right {
    position: absolute;
    top: 50%;
    right: 15px;
    z-index: 10;
}

.carousel .thumbs-wrapper {
    margin: 0 !important;
    margin-top: 15px !important;
}

.carousel .thumbs {
    padding: 0;
    width: 534px;
}

.carousel .thumb {
    background-color: ${({ theme }) => theme.neutral_200};
    padding: 10px 30px !important;
}
.ant-btn {
  border-radius: 4px !important;
}

.ant-message {
  top: 100px !important;
}

.ant-message-notice {
  text-align: end !important;
  .ant-message-notice-content {
    background-color: ${({ theme }) => theme.secondary_100};
    border: 1px solid ${({ theme }) => theme.secondary_600};
    padding-right: 60px;
    margin-left: auto;

    .anticon svg {
      margin-top: -7px;
    }
  }
  span {
    color: ${({ theme }) => theme.neutral_900};
    font-size: 14px;
    line-height: 20px;
  }
}

.ant-modal-content {
  padding: 24px;
  .ant-modal-body {
    padding: 0;
  }
  .ant-modal-confirm-body-wrapper {
    .anticon {
      display: none;
    }
    .ant-modal-confirm-title {
      padding: 12px;
      color: ${({ theme }) => theme.neutral_black};
      font-weight: 400;
    }
    .ant-btn {
      height: 48px;
      width: 96px;
    }
    .ant-btn-primary {
      background-color: ${({ theme }) => theme.primary_600};
      border: 0;
      &:hover {
        background-color: ${({ theme }) => theme.primary_700};
      }
    }
  }
  
}
.ant-input-affix-wrapper {
    border: 1px solid ${({ theme }) => theme.neutral_500} !important;
    &:hover {
      border-color: ${({ theme }) => theme.secondary_600} !important;
    }
    &-focused {
      box-shadow: none;
      border-color: ${({ theme }) => theme.secondary_600} !important;
    }
  }
.ant-tooltip {
  min-width: 300px;
  border-radius: 14px;
  .ant-tooltip-inner {
    padding: 16px;
    ul {
      margin: 0;
      padding: 0;
      padding-left: 16px;
    }
    li {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
}

.ant-drawer-body {
  .ant-menu.ant-menu-vertical {
    border: 0 !important;
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
  .ant-menu-item-selected a {
    color: ${({ theme }) => theme.neutral_900}
  }
}

@media screen and (max-width: 1279px) {
  html {
    font-size: 9px;
  }
}

@media screen and (max-width: 1023px) {
  html {
    font-size: 8.5px;
  }
}
@media screen and (max-width: 767px) {
  html {
    font-size: 8.6px;
  }
}
@media screen and (max-width: 575px) {
  html {
    font-size: 7.5px;
  }
  .ant-drawer-content-wrapper {
    width: 60% !important;
  }
}
@media screen and (max-width: 400px) {
  html {
    font-size: 7px;
  }
}

`;
