import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 10px;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    /* padding-top: ${StyleConstants.NAV_BAR_HEIGHT}; */
    background-color: ${p => p.theme.background};
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
`;
